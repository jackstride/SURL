const express = require('express');
const router = express.Router();
const bycrypt = require('bcrypt');
const passport = require('passport');

const User = require('../Schema/User');
const jwt = require('jsonwebtoken');

const saltRounds = 5;

// @POST
// User Register
router.post('/register', async (req, res, next) => {
  let { name, email, password } = req.body;

  try {
    email = email.toLowerCase();

    let found = User.find({ email });

    if (found.length) {
      return res.json({ mesage: 'User already exists with this email' });
    }

    const hash = bycrypt.hashSync(password, saltRounds);

    let createUser = new User({
      email,
      password: hash,
      name,
    });

    let insert = await createUser.save();

    insert ? res.json({ message: 'User saved' }) : next(error);
  } catch (error) {
    return next(error);
  }
});

// @POST
// User Login
router.post('/login', async (req, res, next) => {
  let { email, password } = req.body;

  try {
    email = email.toLowerCase();
    let found = await User.find({ email });

    if (!found.length) {
      return next(error);
    }

    let match = await bycrypt.compareSync(password, found[0].password);

    if (match) {
      let { _id, email } = found[0];
      const payload = { _id, email };

      let token = await generateToken(payload);

      if (!token) {
        return next(error);
      }
      res.header('Authorization', 'bearer' + token).json({
        user: payload,
      });
    } else {
      return next(error);
    }
  } catch (error) {
    return next(error);
  }
});

router.get('/twitter', passport.authenticate('twitter'));

router.get(
  '/twitter/callback',
  passport.authenticate('twitter'),
  async (req, res, next) => {
    try {
      let payload = {
        _id: req.user._id,
        email: req.user.email,
      };

      let token = await generateToken(payload);

      payload.token = token;

      if (!token) {
        return next(error);
      } else {
        req.session.token = token;
        req.session.user = req.user;
        res.redirect('http://localhost:3000/social?redirect=true');
      }
    } catch (error) {
      console.log(error);
    }
  }
);

router.get('/social_verification', (req, res, next) => {
  console.log(req.session);
  res.json({
    user: req.session.user,
    token: req.session.token,
  });
});

router.post('/logout', async (req, res, next) => {
  req.session.destroy();
  res.sendStatus(200);
});

const generateToken = async (payload) => {
  let token = await jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '2 days',
  });
  if (token) {
    return token;
  } else {
    return next(err);
  }
};

module.exports = router;
