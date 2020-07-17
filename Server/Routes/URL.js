const express = require('express');
const router = express.Router();
const { nanoid } = require('nanoid');
const URL = require('../Schema/url');

//User logged in can post
router.post('/', async (req, res, next) => {
  try {
    let { slug, url, _id } = req.body;

    if (!_id) {
      return next('There is not user id');
    }

    if (!slug) {
      slug = nanoid(5);
    }

    slug = slug.toLowerCase();

    let pushURL = await new URL({
      slug,
      url,
      user: _id,
    });

    let error = pushURL.validateSync();

    if (error) {
      return next(error);
    } else {
      let success = await pushURL.save();
      if (success) {
        res.json({ message: 'URL has been saved', success });
      }
    }
  } catch (error) {
    return next(error);
  }
});

router.get('/user/:_id', async (req, res, next) => {
  const { _id } = req.params;

  if (!_id) {
    return next(error);
  }

  const found = await URL.find({ user: _id }).exec();

  if (!found) {
    return next(error);
  } else {
    return res.json({ URL: found });
  }
});

// Get the URL baased on the ID
router.get('/:id', async (req, res, next) => {
  // Search for the ID and redirect
  const { id } = req.params;

  let link = await URL.find({ slug: id }).exec();

  let { url } = link[0];

  res.redirect(202, url);
});

// Delete URLS

router.delete('/delete', async (req, res, next) => {
  let { _id } = req.body;

  let success = await URL.deleteMany({
    _id: {
      $in: _id,
    },
  });

  if (success) {
    res.sendStatus(200);
  } else {
    return next(error);
  }
});

module.exports = router;
