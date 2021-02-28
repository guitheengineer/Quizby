const result = require('dotenv').config();

if (result.error) {
  throw result.error;
}

process.on('uncaughtException', (err) => {
  console.log('uncaughtException, shutting down the server');
  console.log(err.message, err.name);
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

mongoose.connect(DB, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', () => console.log('error'));
db.once('open', () => console.log('connected'));

expressApp.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
expressApp.use(express.json({ limit: '50mb' }));

expressApp.use('/api', app);
expressApp.use('/api/user/:username', user);
expressApp.use('/api/quizzes', quizzes);

const server = expressApp.listen(port, () => console.log('server started'));

process.on('unhandledRejection', (err) => {
  console.log('unhandledRejection, shutting down.');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
