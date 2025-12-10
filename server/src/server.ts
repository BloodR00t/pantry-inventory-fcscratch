import dotenv, { config } from 'dotenv';
// import 'dotenv/config';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
// require('dotenv').config();

// import process from 'process';
// console.log(process.env.MONGODB_URI);

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// console.log(process.env.MONGODB_URI);
const uri: string | any = process.env.MONGODB_URI; //any works, but string | undefined doesn't work - look up specific types for .env
// console.log('uri: ', uri);
// console.log('process: ', process.env.TEST);

(async () => {
  try {
    await mongoose.connect(uri);
    console.log('Connected to the database');
  } catch (error) {
    console.error(error);
  }
})();

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).send('Server is running');
});

const PORT: string | number = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
