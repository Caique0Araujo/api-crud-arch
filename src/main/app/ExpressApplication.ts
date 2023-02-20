import { Application } from "./Application";
import express from "express";
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv'


dotenv.config();

import { Database } from "../../database/database";
import { IRouter } from "../routes/router";
export class ExpressApplication implements Application {
  private server: any;
  private databaseConnection: any;
  constructor(
    private readonly router: IRouter,
    private readonly database: Database
  ){
    this.server = express();
  }
  setupMiddlewares(): void {
    this.server.use(express.json());
      this.server.use(cors({
        origin: [process.env.SERVER_CORS1, process.env.SERVER_CORS2]
      }));
      this.server.use(helmet());
  }
  setupRouter(): void {
      this.server.use(this.router.getRouter());
  }
  setupDatabase(): void {
    this.database.init()
    this.databaseConnection = this.database.getConnection()

  }
  start(): void {
    this.setupMiddlewares();
    this.setupRouter();
    this.setupDatabase();
    if(!this.databaseConnection){
      this.server.listen( 
        process.env.SERVER_PORT || 3000
      );
    }else{
      this.databaseConnection.connection.sync()
      .then(() => {
          const port = process.env.SERVER_PORT
          this.server.listen( 
            port || 3000
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
    
  }
}

