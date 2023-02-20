import { applicationFactory } from './main/factories/app/server';

const app = applicationFactory();

app.start();