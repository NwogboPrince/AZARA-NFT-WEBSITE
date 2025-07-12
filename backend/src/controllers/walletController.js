const Wallet = require('../models/Wallet');
const blockchainService = require('../services/blockchainService');

// Connect Wallet
exports.connectWallet = async (req, res) => {
    const { walletAddress } = req.body;

    try {
        // Validate wallet address
        if (!walletAddress) {
            return res.status(400).json({ message: 'Wallet address is required' });
        }

        // Check if wallet exists
        let wallet = await Wallet.findOne({ address: walletAddress });
        if (!wallet) {
            // Create a new wallet if it doesn't exist
            wallet = new Wallet({ address: walletAddress });
            await wallet.save();
        }

        res.status(200).json({ message: 'Wallet connected successfully', wallet });
    } catch (error) {
        res.status(500).json({ message: 'Error connecting wallet', error });
    }
};

// Get Wallet Balance
exports.getWalletBalance = async (req, res) => {
    const { walletAddress } = req.params;

    try {
        // Fetch balance from blockchain service
        const balance = await blockchainService.getBalance(walletAddress);
        res.status(200).json({ walletAddress, balance });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching wallet balance', error });
    }
};