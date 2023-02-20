import { Router } from "express";
import { userRoutes } from "./user";
import { IRouter } from "../router";

export class ExpressRouter implements IRouter {

  private router: Router;

  constructor(){
     this.router = Router();
  }

  setupRoutes(){
    this.router.use('/user', userRoutes);
  }

  getRouter() {
    this.setupRoutes()
    return this.router
  }
} 


