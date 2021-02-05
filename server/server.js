const result = require('dotenv').config();

if (result.error) {
  throw result.error;
}

process.on('uncaughtException', (err) => {
  console.log('uncaughtException, shuting down the server');
  console.log(err, ' <<err');
  process.exit(1);
});

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const { app } = require('./server-routes');
const { user } = require('./server-routes');
const { quizzes } = require('./server-routes');

const expressApp = express();
expressApp.use(cors());
expressApp.use(express.static(path.join(path.resolve(), 'build')));

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
expressApp.use(express.json({ limit: '50mb' }));

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
