const Wallet = require('../models/Wallet');
const blockchainService = require('./blockchainService');

// Function to create a new wallet
const createWallet = async (userId) => {
    try {
        const walletAddress = await blockchainService.createWallet();
        const newWallet = new Wallet({
            userId,
            address: walletAddress,
            balance: 0
        });
        await newWallet.save();
        return newWallet;
    } catch (error) {
        throw new Error('Error creating wallet: ' + error.message);
    }
};

// Function to retrieve a user's wallet
const getWallet = async (userId) => {
    try {
        const wallet = await Wallet.findOne({ userId });
        if (!wallet) {
            throw new Error('Wallet not found');
        }
        return wallet;
    } catch (error) {
        throw new Error('Error retrieving wallet: ' + error.message);
    }
};

// Function to update wallet balance
const updateWalletBalance = async (userId, amount) => {
    try {
        const wallet = await Wallet.findOne({ userId });
        if (!wallet) {
            throw new Error('Wallet not found');
        }
        wallet.balance += amount;
        await wallet.save();
        return wallet;
    } catch (error) {
        throw new Error('Error updating wallet balance: ' + error.message);
    }
};

// Function to connect a wallet
const connectWallet = async (userId, walletAddress) => {
    try {
        const wallet = await Wallet.findOne({ userId });
        if (!wallet) {
            throw new Error('Wallet not found');
        }
        wallet.address = walletAddress;
        await wallet.save();
        return wallet;
    } catch (error) {
        throw new Error('Error connecting wallet: ' + error.message);
    }
};

module.exports = {
    createWallet,
    getWallet,
    updateWalletBalance,
    connectWallet
};