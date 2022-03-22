const errorhandler = (err, req, res, next) => {
  const status = res.statusCode ? res.statusCode : 500;
  res
    .status(status)
    .json({
      message: err.message,
      stack: process.env.NODE_ENV === "prod" ? null : err.stack,
    });
};

module.exports = {errorhandler}