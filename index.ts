import { createReadStream } from 'fs';
import csv from 'csv-parser';
import strategyType from './config';
import Strategy from './outputs/interface';
import ConsoleStrategy from './outputs/console';
import RedisStrategy from './outputs/redis';
import KafkaStrategy from './outputs/kafka';

let strategy: Strategy;

switch (strategyType) {
    case 'console':
        strategy = new ConsoleStrategy();
        break;
    case 'redis':
        strategy = new RedisStrategy();
        break;
    case 'kafka':
        strategy = new KafkaStrategy();
        break;
    default:
        throw new Error(`Unknown strategy - ${strategyType}`)
}

(async () => {
    if (strategy.connect) await strategy.connect();
    createReadStream('data.csv')
        .pipe(csv())
        .on('data', async (row) => {
            await strategy.write(row);
        })
        .on('end', async () => {
            if (strategy.disconnect) await strategy.disconnect();
            console.log('Success');
        });
})();
