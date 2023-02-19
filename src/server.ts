import { applicationFactory } from './main/factories/app/setServer';

const app = applicationFactory();

app.start();