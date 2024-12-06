const Tour = require('./../models/tourModel.js');

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
exports.createTour = async (req, res) => {
  try {
    // const newTour = new Tour({});
    // newTour.save();
    console.log(req.body);
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'Fail',
      message: 'Invalid data sent!',
    });
  }
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
