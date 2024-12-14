const express = require('express');
const {
  getAllTours,
  getTour,
  createTour,
  deleteTour,
  updatedTour,
  aliasTopTours,
} = require('./../controllers/tourController');

const router = express.Router();
// router.param('id', checkID);

router.route('/top-5-cheap').get(aliasTopTours, getAllTours);
// router.route('/api/v1/tours').get(getAllTours).post(createTour);
router.route('/').get(getAllTours).post(createTour);

router
  // .route('/api/v1/tours/:id')
  .route('/:id')
  .get(getTour)
  .patch(updatedTour)
  .delete(deleteTour);

module.exports = router;
