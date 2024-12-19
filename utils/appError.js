class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
    // Normally, when an error happens, JavaScript automatically creates a stack trace. However, Error.captureStackTrace lets you customize the trace to remove unnecessary details.

    // this.constructor: Refers to the AppError class. This tells captureStackTrace to skip including the AppError class itself in the stack trace.

    // Why? So the trace starts from where the error was actually created, making debugging easier.
  }
}

module.exports = AppError;
