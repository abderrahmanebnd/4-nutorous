const express = require('express');
const {
  getAllTours,
  getTour,
  createTour,
  deleteTour,
  updatedTour,
  aliasTopTours,
  getTourStats,
  getMonthlyPlan,
} = require('./../controllers/tourController');
const { protect, restrictTo } = require('./../controllers/authController');

const router = express.Router();
// router.param('id', checkID);

router.route('/top-5-cheap').get(aliasTopTours, getAllTours);

router.route('/tour-stats').get(getTourStats);
router.route('/monthly-plan/:year').get(getMonthlyPlan);

// router.route('/api/v1/tours').get(getAllTours).post(createTour);
router.route('/').get(protect, getAllTours).post(createTour);

router
  // .route('/api/v1/tours/:id')
  .route('/:id')
  .get(getTour)
  .patch(updatedTour)
  .delete(protect, restrictTo('admin', 'lead-guide'), deleteTour);

module.exports = router;
