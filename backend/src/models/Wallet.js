const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  address: {
    type: String,
    required: true,
    unique: true,
  },
  balance: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

walletSchema.methods.updateBalance = async function(amount) {
  this.balance += amount;
  await this.save();
};

const Wallet = mongoose.model('Wallet', walletSchema);

module.exports = Wallet;