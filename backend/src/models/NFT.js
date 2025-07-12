const mongoose = require('mongoose');

const nftSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  currentBid: {
    type: Number,
    default: 0,
  },
  bids: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bid',
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  auctionEnd: {
    type: Date,
    required: true,
  },
});

nftSchema.methods.placeBid = function(bidId) {
  this.bids.push(bidId);
  return this.save();
};

const NFT = mongoose.model('NFT', nftSchema);

module.exports = NFT;