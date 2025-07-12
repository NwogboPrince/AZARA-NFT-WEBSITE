const Bid = require('../models/Bid');
const NFT = require('../models/NFT');

// Place a bid on an NFT
exports.placeBid = async (req, res) => {
    const { nftId, userId, amount } = req.body;

    try {
        // Check if the NFT exists
        const nft = await NFT.findById(nftId);
        if (!nft) {
            return res.status(404).json({ message: 'NFT not found' });
        }

        // Create a new bid
        const newBid = new Bid({
            nft: nftId,
            user: userId,
            amount,
            createdAt: new Date()
        });

        // Save the bid to the database
        await newBid.save();

        // Update the NFT with the new bid
        nft.currentBid = amount;
        await nft.save();

        res.status(201).json({ message: 'Bid placed successfully', bid: newBid });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get bid history for a specific NFT
exports.getBidHistory = async (req, res) => {
    const { nftId } = req.params;

    try {
        // Fetch bids for the specified NFT
        const bids = await Bid.find({ nft: nftId }).populate('user', 'username');

        res.status(200).json(bids);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};