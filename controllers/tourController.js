const Tour = require('./../models/tourModel.js');

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`),
// );

// Lesson 64:param middleware

// exports.checkID = (req, res, next, val) => {
//   const id = req.params.id * 1; // in js if u have a "string" looks like a number ("1","2"..) and then you multiply it with another number it will become a "number".

//   if (id > tours.length) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID !',
//     });
//   }
//   next();
// };

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      // bad request
      status: 'fail',
      message: 'Missing name or price',
    });
  }
  next();
};
// JSend specification is a send format {status,data}
exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    // results: tours.length, // not part of JSend
    // data: {
    //   tours,
    // },
  });
};

exports.getTour = (req, res) => {
  // const tour = tours.find((item) => item.id === req.params.id);
  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour,
  //   },
  // });
};

exports.createTour = (req, res) => {
  res.status(201),
    json({
      status: 'success',
      // data: {
      //   tour: newTour,
      // },
    });
};

exports.updatedTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: 'Updated tour...',
    },
  });
};

exports.deleteTour = (req, res) => {
  //we use the status code of 204 in the delete method which means "No Content" because when we delete a resource we do not send any data back to the client.
  res.status(204).json({
    status: 'success',
    data: null, // null means here that the ressourse have deleted
  });
};
