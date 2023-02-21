import { Application } from "./Application";
import express from "express";
import dotenv from 'dotenv'
import { IDatabase } from "../../database/database";
import { IRouter } from "../routes/router";
import { IMiddlewares } from "../middlewares/middlewares";
dotenv.config();

export class ExpressApplication implements Application {
  private server: any;
  constructor(
    private readonly router: IRouter,
    private readonly database: IDatabase,
    private readonly middlewares: IMiddlewares
  ){
    this.server = express();
  }
  setupMiddlewares(): void {
    this.middlewares.setMiddlewares(this.server);

  }
  setupRouter(): void {
    this.server.use(this.router.getRouter());
    this.router.setupRoutes()
  }
  setupDatabase(): void {
    this.database.init()

  }
  start(): void {
    this.setupMiddlewares();
    this.setupRouter();
    this.setupDatabase();
    this.server.listen( 
      process.env.SERVER_PORT  || 3000
    );
   
    
  }
}

