import { Kafka, Producer } from 'kafkajs';
import Strategy from './interface';

export default class KafkaStrategy implements Strategy {
  private producer: Producer;

  constructor() {
    const kafka = new Kafka({ clientId: 'producer', brokers: ['localhost:9092'] });
    this.producer = kafka.producer();
  }

  async connect(): Promise<void> {
    await this.producer.connect();
  }

  async write(row: any): Promise<void> {
    await this.producer.send({
      topic: 'topic1',
      messages: [{ value: JSON.stringify(row)}],
    });
  }

  async disconnect(): Promise<void> {
    await this.producer.disconnect();
  }
}
