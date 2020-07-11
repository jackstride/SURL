const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
  slug: {
    type: String,
    unique: true,
    maxlength: 5,
    minlength: 1,
    validate: {
      validator: (v) => {
        var re = /[a-zA-Z0-9 /_]/;
        return re.test(v);
      },
    },
  },
  url: {
    type: String,
    unique: false,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
});

const URL = mongoose.model('URL', urlSchema);

module.exports = URL;
