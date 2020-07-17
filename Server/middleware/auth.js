const jwt = require('jsonwebtoken');
const e = require('express');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    if (!token) {
      return next(err);
    } else {
      const verified = await jwt.verify(token, process.env.JWT_SECRET);

      if (verified) {
        console.log('token verified');
        return next();
      } else {
        return next(error);
      }
    }
  } catch (error) {
    error.status = 401;
    error.message = 'Unauthorised Access';
    return next(error);
  }
};
