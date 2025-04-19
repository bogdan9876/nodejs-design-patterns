import { createReadStream } from 'fs';
import csv from 'csv-parser';
import { createClient } from 'redis';

const client = createClient();

(async () => {
  await client.connect();
  console.log('Connection to redis');

  const list = 'users';

  createReadStream('data.csv')
    .pipe(csv())
    .on('data', async (row) => {
      client.rPush(list, JSON.stringify(row));
    })
    .on('end', async () => {
      console.log('Cvs file successfully populated to Redis');
      await client.quit();
    });
})();
