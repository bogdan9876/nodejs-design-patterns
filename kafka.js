import { Kafka } from 'kafkajs';
import { createReadStream } from 'fs';
import csv from 'csv-parser';

const kafka = new Kafka({
  clientId: 'csv-producer',
  brokers: ['localhost:9092']
});

const producer = kafka.producer();

(async () => {
  await producer.connect();
  console.log('Kafka підключено');

  createReadStream('data.csv')
    .pipe(csv())
    .on('data', async (row) => {
      producer.send({
        topic: 'csv-topic',
        messages: [
          { value: JSON.stringify(row) }
        ],
      });
    })
    .on('end', async () => {
    console.log('CSV file successfully populated to Kafka');
      await producer.disconnect();
    });
})();
