export interface Database {
  init(): void;
  getConnection(): any;
}