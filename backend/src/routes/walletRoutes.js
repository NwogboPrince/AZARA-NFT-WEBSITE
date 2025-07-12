const express = require('express');
const router = express.Router();
const walletController = require('../controllers/walletController');

// Route to connect a wallet
router.post('/connect', walletController.connectWallet);

// Route to retrieve wallet balance
router.get('/balance/:userId', walletController.getWalletBalance);

// Route to retrieve wallet transactions
router.get('/transactions/:userId', walletController.getWalletTransactions);

module.exports = router;