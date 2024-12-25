const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');

const app = express();

// 1) GLOBAL MIDDLEWARES

//  to set secure headers
app.use(helmet());

// the limiter here is a middleware
// limit the number of requests from the same IP
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000, // window means in how much time we want to limit the request (in this case 100 request from the same IP in 1 hour)
  message: 'Too many requests from this IP, please try again in an hour!',
});

app.use('/api', limiter); // block also all the routes that start with /api

// body parser, reading data from the body into req.body
app.use(
  express.json({
    limit: '10kb',
  }),
);
// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization againt XSS attack
app.use(xss());

// prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'difficulty',
      'price',
    ],
  }),
);
// serving static files
app.use(express.static(`${__dirname}/public`));

// test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);
// handle unhadled routes
// if we are able to reach this part, the tourRouter,userRouter did not catch it
app.all('*', (req, res, next) => {
  // if the next func receive an argument, express automatically know that this is an error and there for it will pass all the middlware in the middleware stack and give us back the error( goes to the error global middleware)
  next(new AppError(`Can not find ${req.originalUrl} on this server`, 404));
});

// if we have a 500 it's an error , and if we have 404 it's a fail
app.use(globalErrorHandler);
module.exports = app;
