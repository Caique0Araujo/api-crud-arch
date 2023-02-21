import { Router } from 'express';
export interface IRouter {
  setupRoutes(): void;
  getRouter(): Router;
}