import { createClient, RedisClientType } from 'redis';
import Strategy from './interface';

export default class RedisInstance implements Strategy {
  private client: RedisClientType;

  constructor() {
    this.client = createClient();
  }

  async init(): Promise<void> {
    await this.client.connect();
  }

  async write(row: any): Promise<void> {
    await this.client.rPush('users', JSON.stringify(row));
  }

  async close(): Promise<void> {
    await this.client.quit();
  }
}
