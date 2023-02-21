import express from 'express';
import { IMiddlewares } from "./middlewares";
import { expressMiddlewares } from '../config/expressMiddlewares';

export class ExpressMiddlewares implements IMiddlewares{
  setMiddlewares(app: express) {
    expressMiddlewares.map(middleware => {
      app.use(middleware.middleware)
    })
  }

}