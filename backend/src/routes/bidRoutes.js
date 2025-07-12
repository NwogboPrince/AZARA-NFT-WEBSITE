const express = require('express');
const router = express.Router();
const bidController = require('../controllers/bidController');

// Route to place a bid
router.post('/place', bidController.placeBid);

// Route to get bid history for a specific NFT
router.get('/history/:nftId', bidController.getBidHistory);

// Route to get all bids for a specific user
router.get('/user/:userId', bidController.getUserBids);

module.exports = router;