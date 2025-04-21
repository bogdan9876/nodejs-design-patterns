import Strategy from './interface';

export default class ConsoleStrategy implements Strategy {
  async write(row: any): Promise<void> {
    console.log(JSON.stringify(row));
  }
}
