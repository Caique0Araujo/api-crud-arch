import { IDatabase } from './database';
import { Dialect, Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config();

const dbName = process.env.DB_NAME as string
const dbUser = process.env.DB_USER as string
const dbHost = process.env.DB_HOST
const dbDriver = 'mysql'
const dbPassword = process.env.DB_PASSWORD

class SequelizeDatabase implements IDatabase {

  private connection: Sequelize;

  init(): void {
      this.connection =  new Sequelize(
        dbName, 
        dbUser, 
        dbPassword, {
        host: dbHost,
        dialect: dbDriver
      })
      this.connection.sync();
  }
  getConnection(): Sequelize {
      return this.connection;
  }
}

export default SequelizeDatabase