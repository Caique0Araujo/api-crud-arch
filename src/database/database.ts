export interface IDatabase {
  init(): void;
  getConnection(): any;
}