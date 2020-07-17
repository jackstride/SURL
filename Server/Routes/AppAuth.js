const express = require('express');
const router = express.Router();
const middleAuth = require('../middleware/auth');

router.get('/', middleAuth, async (req, res, next) => {
  res.status(200);
});

module.exports = router;
