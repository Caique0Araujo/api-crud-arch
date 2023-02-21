import { Router } from "express";
import { IRouter } from "../router";
import { routes } from "../../config/expressRoutes";

export class ExpressRouter implements IRouter {

  private router: Router;

  constructor(){
     this.router = Router();
  }

  setupRoutes(): void{
    routes.map((route) => {
      this.router.use(route.endpoint, route.router)
    })
  }

  getRouter():Router {
    return this.router
  }
} 


