const express = require('express');
const { getMarketData, getTrendingNFTs } = require('../controllers/marketController');

const router = express.Router();

// Route to get market data
router.get('/market', getMarketData);

// Route to get trending NFTs
router.get('/trending', getTrendingNFTs);

module.exports = router;