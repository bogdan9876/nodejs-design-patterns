export default interface Strategy {
  connect?(): Promise<void>;
  write(row: any): Promise<void>;
  disconnect?(): Promise<void>;
}