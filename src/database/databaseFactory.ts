import { IDatabase } from "./database";
import SequelizeDatabase from "./sequelizeDatabase";

export function databaseFactory(): IDatabase{
  const database = new SequelizeDatabase();
  database.init();
  return database;
}