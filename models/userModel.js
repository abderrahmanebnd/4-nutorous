const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const catchAsync = require('../utils/catchAsync');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must have a name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'A user must have an email'],
    trim: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  photo: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'A user must have a password'],
    minLength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not the same !',
    },
  },
});

// we do the encription in this middleware because it should happens between "we recieve the data" and  "it will be stored in the database "
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  // the more the cost is higher (here is 12 and by default is 10) the more the hashing is CPU intensive and the better the password will be encrypted
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

// the candidatePassword is the one coming from the user when he tries to log in (not encrypted)
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword,
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
