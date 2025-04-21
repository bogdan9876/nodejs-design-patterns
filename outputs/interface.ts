export default interface Strategy {
    init?(): Promise<void>;
    write(row: any): Promise<void>;
    close?(): Promise<void>;
  }
  