const express = require('express');
const {
  getAllTours,
  getTour,
  createTour,
  deleteTour,
  updatedTour,
  checkID,
  checkBody,
} = require('./../controllers/tourController');

const router = express.Router();
// router.param('id', checkID);

// router.route('/api/v1/tours').get(getAllTours).post(createTour);
router.route('/').get(getAllTours).post(checkBody, createTour);

router
  // .route('/api/v1/tours/:id')
  .route('/:id')
  .get(getTour)
  .patch(updatedTour)
  .delete(deleteTour);

module.exports = router;
