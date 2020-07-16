const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  if (req.session.token) {
    return res.json({ user: req.session.user, token: req.session.token });
  } else {
    return next('No token');
  }
});

module.exports = router;
