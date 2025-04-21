import { createReadStream } from 'fs';
import csv from 'csv-parser';
import { strategy } from './outputs/interface';

let strategy: strategy;

switch (strategyType) {
  case 'console':
    strategy = new ConsoleWriter();
    break;
  case 'redis':
    strategy = new RedisWriter();
    break;
  case 'kafka':
    strategy = new KafkaWriter();
    break;
  default:
    console.log("");
}

(async () => {
  await strategy.init();
  createReadStream('data.csv')
    .pipe(csv())
    .on('data', async (row) => {
      await strategy.write(row);
    })
    .on('end', async () => {
      if (strategy.close) await strategy.close();
      console.log('CSV оброблено та передано у вибране сховище');
    });
})();
