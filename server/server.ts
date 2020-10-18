process.on('uncaughtException', (err) => {
  console.log('uncaughtException, shuting down the server');
  console.log(err, ' <<err');
  process.exit(1);
});

import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const expressApp = express();
import path from 'path';
import bodyParser from 'body-parser';
import { app, quizzes, user } from './server-routes';

expressApp.use(cors());
const __dirname = path.resolve();
expressApp.use(express.static(path.join(__dirname, 'build')));

const port = process.env.PORT || 5000;

const DB = process.env.DB || '';

const connectApp = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useFindAndModify: false,
    });
  } catch (err) {
    console.log(err);
  }
};
connectApp();

mongoose.connection.on('connected', () => {
  console.log('mongoose is connected');
});

expressApp.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));

expressApp.use('/api', app);
expressApp.use('/api/user/:username', user);
expressApp.use('/api/quizzes', quizzes);

const server = expressApp.listen(port, () => console.log('server started'));

process.on('SIGINT', () => {
  server.close();
});

// app.use(globalErrorHandler);
process.on('unhandledRejection', (err) => {
  console.log('unhandledRejection, shuting down.');
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});

export {};
