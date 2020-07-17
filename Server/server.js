const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const passport = require('passport');
const session = require('express-session');

require('dotenv').config();
require('./dbConnect');
require('./Passport');

const urlRoute = require('./Routes/URL');
const authRoute = require('./Routes/Auth');
const AppAuth = require('./Routes/AppAuth');

// app.use(cors());
app.use(helmet());
app.use(
  cors({
    origin: '*',
    methods: 'POST PUT GET PATCH UPDATE DELETE',
    // credentials: true,
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(
  session({
    secret: 'keyboard-cat',
    resave: false,
    saveUninitialized: false,
  })
);

// Routes
app.use('/url', urlRoute);
app.use('/auth', authRoute);
app.use('/app', AppAuth);

// Home Page

// Generate the URL

// Errors handler I like it
app.use((error, req, res, next) => {
  if (error.status) {
    res.status(error.status);
  } else {
    res.status(500);
  }
  console.log(res.statusCode);
  console.log(error.message);
  res.json({
    message: error.message,
  });
});

app.listen(5000, () => console.log('App is listening on port 5000'));
