const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const app = express();
const assert = require('assert');
const { nanoid, customAlphabet } = require('nanoid');
const path = require('path');

require('dotenv').config();
require('./dbConnect');

const urlRoute = require('./Routes/URL');
const authRoute = require('./Routes/Auth');

// app.use(cors());
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/url', urlRoute);
app.use('/auth', authRoute);

// Home Page
app.get('/', async (req, res, next) => {
  try {
    res.json({
      message: 'all has passed',
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

// Generate the URL

// Errors handler I like it
app.use((error, req, res, next) => {
  if (error.status) {
    res.status(errors.status);
  } else {
    res.status(500);
  }
  res.json({
    message: error.message,
  });
});

app.listen(5000, () => console.log('App is listening on port 5000'));
