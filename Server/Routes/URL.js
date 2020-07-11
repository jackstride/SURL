const express = require('express');
const router = express.Router();

const URL = require('../Schema/url');

//User logged in can post
router.post('/', async (req, res, next) => {
  try {
    let { slug, url, _id } = req.body;

    _id = '5f085de32bdb980b8b64e728';

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
        res.json({ message: 'URL has been saved', url, slug });
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

module.exports = router;
