import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import { logger, morganInstance } from './utils/logger';
import cors from 'cors';

dotenv.config();

const app: Application = express();
(global as any).logger = logger;

// Middlewares
const whitelist: string[] = ['http://localhost:6235'];
app.use(
  cors({
    origin: (origin: string | undefined, callback: (err: Error | null, allow: boolean) => void) => {
      if (whitelist.includes(origin as string) || !origin) {
        callback(null, true);
      } else {
        logger.error(`CORS error: Origin '${origin}' is not allowed.`);
        callback(new Error(`CORS error: Origin '${origin}' is not allowed.`), false);
      }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 204,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morganInstance);

app.get('/ping', (req: Request, res: Response) => {
  logger.info('The server is up and running, just like your dreams should be!');
  res.status(200).send('The server is up and running, just like your dreams should be!');
});

// Global Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(`Unhandled Error: ${err.message}`);
  res.status(500).json({ message: err.message });
});
export default app;
