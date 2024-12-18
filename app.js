const express = require('express');
const app = express();

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

app.use(express.json());
app.use(express.static(`./public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// handle unhadled routes

// if we are able to reach this part, the tourRouter,userRouter did not catch it
app.all('*', (req, res, next) => {
  // if the next func receive an argument, express automatically know that this is an error and there for it will pass all the middlware in the middleware stack and give us back the error( goes to the error global middleware)
  next(new AppError(`Can not find ${req.originalUrl} on this server`, 404));
});

// if we have a 500 it's an error , and if we have 404 it's a fail
app.use(globalErrorHandler);
module.exports = app;
