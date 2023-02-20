import { Application } from "./Application";
import express from "express";
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv'


dotenv.config();

import { Database } from "../../database/database";
import { IRouter } from "../routes/router";
import { userRoutes } from "../routes/express-routes/user";
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
      this.router.setupRoutes('/user', userRoutes) // Configurar um arquivo com as rotas e carregar todas através de um map
  }
  setupDatabase(): void {
    this.database.init()
    this.databaseConnection = this.database.getConnection()

  }
  start(): void {
    this.setupMiddlewares();
    this.setupRouter();
    this.setupDatabase();
    const port = process.env.SERVER_PORT 
    if(!this.databaseConnection){
      this.server.listen( 
        port || 3000
      );
    }else{
      this.databaseConnection.sync()
      .then(() => {
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

