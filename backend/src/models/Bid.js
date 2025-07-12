const mongoose = require('mongoose');

const bidSchema = new mongoose.Schema({
  nftId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'NFT',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Method to format bid data
bidSchema.methods.toJSON = function() {
  const bid = this;
  const bidObject = bid.toObject();

  delete bidObject.__v; // Exclude version key

  return bidObject;
};

const Bid = mongoose.model('Bid', bidSchema);

module.exports = Bid;