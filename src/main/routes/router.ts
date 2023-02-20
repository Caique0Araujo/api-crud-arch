import { Router } from 'express';
export interface IRouter {
  setupRoutes(endpoint: string, routes: Router);
  getRouter();
}