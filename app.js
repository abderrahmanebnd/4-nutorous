const express = require('express');
const app = express();

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
  // res.status(404).json({
  //   status: 'fail',
  //   message: `Can not find ${req.originalUrl} on this server `,
  // });

  const err = new Error(`Can not find ${req.originalUrl} on this server `);
  err.status = 'fail';
  err.statusCode = 404;

  // if the next func receive an argument, express automatically know that this is an error and there for it will pass all the middlware in the middleware stack and give us back the error( goes to the error global middleware)
  next(err);
});

// if we have a 500 it's an error , and if we have 404 it's a fail
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode),
    json({
      status: err.status,
      message: err.message,
    });
});
module.exports = app;
