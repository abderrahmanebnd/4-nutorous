// it's like a convetion to have all the express configuration in app.js
// we are using express 4 here
const express = require('express');
// const morgan = require('morgan');
const app = express();

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

// Middleware : is a function that just modify the incoming request data , is this exemple  the "express.json()" is the middleware which adds the data from the body to the request object, and the order matters in express for example if we put the middleware after calling app.get(...) the middleware will not execute because it comes after the res.send() or res.json() which terminates the request-response cycle.

// 1) Middlewares

// app.use(morgan('dev')); // give us back informations about the request
app.use(express.json());
app.use(express.static(`./public`));
// app.use(express.static(`${__dirname}/public`))

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString(); // add a new property called requestTime to our request
  next();
});

// this called mounting a specific router on a route, and we have used different routers for different resources to have a nice separation of concern between all this resources
app.use('/api/v1/tours', tourRouter); // we use the tourRouter as a middleware for this specific route
app.use('/api/v1/users', userRouter);

module.exports = app;
