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
  res.status(404).json({
    status: 'fail',
    message: `Can not find ${req.originalUrl} on this server `,
  });
});
module.exports = app;
