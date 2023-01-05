import express from 'express';
import { Request, Response, Application } from 'express';
import * as PuppyService from './server';
const app: Application = express();

//test
app.get('/api/test', (_req: Request, res: Response) => {
  return res.status(200).json({ test: 'is working as it should' });
});

//get all puppies

export default app;
