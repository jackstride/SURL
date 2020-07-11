const { Mongoose } = require('mongoose');

const mongoose = require('mongoose');

try {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log('Database connected');
} catch (error) {
  console.log('Error connecting...' + error);
}
