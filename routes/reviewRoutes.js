const express = require('express');
const {
  getAllReviews,
  getReview,
  createReview,
  deleteReview,
  updateReview,
  setTourUserIds,
} = require('../controllers/reviewController');
const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router({ mergeParams: true }); // this means that we will have access to the tourId from the tourRouter
// POST /tour/234fad4/reviews or GET /tour/234fad4/reviews , these are nested routes for create reveiw and get all reviews for a specific tour
router
  .route('/')
  .get(getAllReviews)
  .post(protect, restrictTo('user'), setTourUserIds, createReview);

router.route('/:id').delete(deleteReview).patch(updateReview).get(getReview);
module.exports = router;
