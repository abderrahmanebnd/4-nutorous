// it is a good  practise to have everything related to express in one file and everything related to the server in another file where we have stuff related to our app like database,error handling,environment variables
const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');
dotenv.config({
  path: './config.env', // this connet make our defined env in the node env
});
// console.log(app.get('env')); ==> development
// console.log(process.env);

const DB = process.env.DATABASE.replace(
  '<DB_PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  // .connect(
  // process.env.DATABASE_LOCAL, {
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('db connected successufully'));

// creating new document
// const tourTest = new Tour({
//   name: 'The new hicher',
//   price: 500,
//   rating: 4.5,
// });

// tourTest
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log('ERROR ⛔', err);
//   });
const port = 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
