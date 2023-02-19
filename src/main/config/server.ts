import { config } from "dotenv"

config();

import dotenv from "dotenv"

dotenv.config();

export const serverConfiguration = {
    type: process.env.SERVER_TYPE,
    port: process.env.SERVER_PORT,
    database: process.env.SERVER_DATABASE
}