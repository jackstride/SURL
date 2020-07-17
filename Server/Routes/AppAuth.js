const express = require('express');
const router = express.Router();
const middleAuth = require('../middleware/auth');

router.get('/', middleAuth, async (req, res, next) => {
  if (req.session.token) {
    return res.json({ user: req.session.user, token: req.session.token });
  } else {
    console.log('hiot this');
    return next('No token');
  }
});

module.exports = router;
