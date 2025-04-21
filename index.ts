import { createReadStream } from 'fs';
import csv from 'csv-parser';
import strategyType from './config';
import Strategy from './outputs/interface';
import ConsoleInstance from './outputs/console';
import RedisInstance from './outputs/redis';
import KafkaInstance from './outputs/kafka';

let strategy: Strategy;

switch (strategyType) {
    case 'console':
        strategy = new ConsoleInstance();
        break;
    case 'redis':
        strategy = new RedisInstance();
        break;
    case 'kafka':
        strategy = new KafkaInstance();
        break;
    default:
        throw new Error(`Unknown strategy - ${strategyType}`)
}

(async () => {
    if (strategy.init) await strategy.init();
    createReadStream('data.csv')
        .pipe(csv())
        .on('data', async (row) => {
            await strategy.write(row);
        })
        .on('end', async () => {
            if (strategy.close) await strategy.close();
            console.log('Success');
        });
})();
