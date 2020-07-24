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
const { appRoute } = require('./serverroutes');
const { userRoute } = require('./serverroutes');

app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));
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

app.use(express.json());
app.use('/', appRoute);
app.use('/user', userRoute);

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
