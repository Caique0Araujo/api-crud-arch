import { IMiddlewares } from "./middlewares";
import { expressMiddlewares } from '../config/expressMiddlewares';

export class ExpressMiddlewares implements IMiddlewares{
  setMiddlewares(app) {
    expressMiddlewares.map(middleware => {
      app.use(middleware.middleware)
    })
  }

}