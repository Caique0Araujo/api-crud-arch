import { Database } from "./database";
import SequelizeDatabase from "./sequelizeDatabase";

export function databaseFactory(): Database{
  const database = new SequelizeDatabase();
  database.init();
  return database;
}