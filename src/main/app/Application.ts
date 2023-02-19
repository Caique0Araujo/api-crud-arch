export interface Application {
  setupMiddlewares(): void;
  setupRouter(): void;
  start():void ;
}