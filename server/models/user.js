const mongoose = require('mongoose');

//@see http://mongoosejs.com/docs/validation.html
const User = mongoose.model('User', {
  email: {
    type: String,
    require: true,
    trim: true,
    minLength: 1
  }
});

module.exports = {
  User
};