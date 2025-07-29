const mongoose = require('mongoose');

const nftSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    tags: [String],
    isListed: {
      type: Boolean,
      default: true,
    },
    history: [
      {
        owner: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
        timestamp: {
          type: Date,
          default: Date.now,
        },
        price: Number,
      },
    ],
    location: {
      type: String,
      default: 'Global',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('NFT', nftSchema);
