const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  walletAddress: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Method to find user by email
userSchema.statics.findByEmail = function(email) {
  return this.findOne({ email });
};

// Method to find user by username
userSchema.statics.findByUsername = function(username) {
  return this.findOne({ username });
};

// Method to update wallet address
userSchema.methods.updateWalletAddress = function(newAddress) {
  this.walletAddress = newAddress;
  return this.save();
};

const User = mongoose.model('User', userSchema);

module.exports = User;