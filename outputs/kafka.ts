import { Kafka, Producer } from 'kafkajs';
import Strategy from './interface';

export default class KafkaInstance implements Strategy {
  private producer: Producer;

  constructor() {
    const kafka = new Kafka({ clientId: 'csv-producer', brokers: ['localhost:9092'] });
    this.producer = kafka.producer();
  }

  async init(): Promise<void> {
    await this.producer.connect();
  }

  async write(row: any): Promise<void> {
    await this.producer.send({
      topic: 'csv-topic',
      messages: [{ value: JSON.stringify(row) }],
    });
  }

  async close(): Promise<void> {
    await this.producer.disconnect();
  }
}
