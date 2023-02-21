import express  from 'express';
import cors from 'cors'
import helmet from 'helmet';
import dotenv from 'dotenv'

dotenv.config();

export const expressMiddlewares = [
  {middleware: express.json()},
  {middleware: 
    cors({
      origin: [process.env.SERVER_CORS1, process.env.SERVER_CORS2]
    })
  },
  {middleware: helmet()}
]