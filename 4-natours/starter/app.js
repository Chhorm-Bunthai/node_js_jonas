const express = require('express');
const app = express();
const morgan = require('morgan');
const tourRoute = require('./routes/tourRoute')
const userRoute = require('./routes/userRoute')

// Middleware
app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello world middleware');
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Routes

app.use('/api/v1/tours', tourRoute)
app.use('/api/v1/users', userRoute)

module.exports = app;
