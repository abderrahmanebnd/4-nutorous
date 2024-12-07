const Tour = require('./../models/tourModel.js');

// JSend specification is a send format {status,data}
exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find(); // all the tours from the tours collection
    res.status(200).json({
      status: 'success',
      results: tours.length, // not part of JSend
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
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

exports.updatedTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }
};

exports.deleteTour = (req, res) => {
  //we use the status code of 204 in the delete method which means "No Content" because when we delete a resource we do not send any data back to the client.

  res.status(204).json({
    status: 'success',
    data: null, // null means here that the ressourse have deleted
  });
};
