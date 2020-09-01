process.on('uncaughtException', (err) => {
  console.log('uncaughtException, shuting down the server');
  console.log(err, ' <<err');
  process.exit(1);
});

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const { appRoute, quizzesRoute } = require('./server-routes');
const { userRoute } = require('./server-routes');

app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
const port = process.env.PORT || 5000;

const DB = process.env.DB.replace('<PASSWORD>', process.env.DB_PASSWORD);

const connectApp = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: false,
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

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));

app.use('/api', appRoute);
app.use('/api/user', userRoute);
app.use('/api/quizzes', quizzesRoute);

const server = app.listen(port, () => 'server started');

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