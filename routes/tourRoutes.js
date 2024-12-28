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
  getToursWithin,
} = require('./../controllers/tourController');

const { protect, restrictTo } = require('./../controllers/authController');
const reviewRouter = require('./../routes/reviewRoutes');

const router = express.Router();
// router.param('id', checkID);

// router
//   .route('/:tourId/reviews')
//   .post(protect, restrictTo('user'), reviewController.createReview);

router.use('/:tourId/reviews', reviewRouter); // this is a middleware that will redirect the request to the reviewRouter when it is coming from the specified route

router.route('/top-5-cheap').get(aliasTopTours, getAllTours);

router.route('/tour-stats').get(getTourStats);
router
  .route('/monthly-plan/:year')
  .get(protect, restrictTo('admin', 'lead-guide', 'guide'), getMonthlyPlan);

router
  .route('/tours-within/:distance/center/:latlng/unit/:unit')
  .get(getToursWithin);
// /tours-distance?distance=233&center=-40,45&unit=mi
router
  .route('/')
  .get(getAllTours)
  .post(protect, restrictTo('admin', 'lead-guide'), createTour);

router
  .route('/:id')
  .get(getTour)
  .patch(protect, restrictTo('admin', 'lead-guide'), updatedTour)
  .delete(protect, restrictTo('admin', 'lead-guide'), deleteTour);

module.exports = router;
