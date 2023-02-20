import { Router } from "express";
import { userRoutes } from "./user";
import { IRouter } from "../router";

export class ExpressRouter implements IRouter {

  private router: Router;

  constructor(){
     this.router = Router();
  }

  setupRoutes(endpoint: string, routes: Router){
    this.router.use(endpoint, routes);
  }

  getRouter() {
    return this.router
  }
} 


