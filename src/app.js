const express = require('express');
const app = express();
const dataBaseConnection = require('./db/db.mongoDB');
const router = require('./routes/router');
const cookieParser = require('cookie-parser');

dataBaseConnection();

// BodyPerser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Cookie-parser
app.use(cookieParser());

app.use('/', router);

// Global Error Handling
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  return res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

app.use('*', (req, res) => {
  res.json({
    message: "Welcome to blogMega's API Server",
    ststus: 'Success',
  });
});

module.exports = app;
