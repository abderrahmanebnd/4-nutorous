const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

// THIS works because the js closures which is a fancy way of saying that the inner function has access to the outer function's variables after the outer function has returned.
exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError('No document found with this ID'));
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  });
