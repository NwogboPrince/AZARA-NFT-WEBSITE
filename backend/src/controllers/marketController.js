const Market = require('../models/NFT'); // Import the NFT model
const Bid = require('../models/Bid'); // Import the Bid model

// Fetch all NFTs available in the market
exports.getMarketData = async (req, res) => {
    try {
        const nfts = await Market.find(); // Fetch all NFTs from the database
        res.status(200).json(nfts); // Send the NFTs as a response
    } catch (error) {
        res.status(500).json({ message: 'Error fetching market data', error }); // Handle errors
    }
};

// Fetch trending NFTs based on bid history
exports.getTrendingNFTs = async (req, res) => {
    try {
        const trendingNFTs = await Bid.aggregate([
            { $group: { _id: "$nftId", totalBids: { $sum: 1 } } }, // Group bids by NFT ID
            { $sort: { totalBids: -1 } }, // Sort by total bids in descending order
            { $limit: 10 }, // Limit to top 10 trending NFTs
        ]).populate('nftId'); // Populate NFT details

        res.status(200).json(trendingNFTs); // Send trending NFTs as a response
    } catch (error) {
        res.status(500).json({ message: 'Error fetching trending NFTs', error }); // Handle errors
    }
};

// Place a bid on an NFT
exports.placeBid = async (req, res) => {
    const { nftId, userId, amount } = req.body; // Destructure request body

    try {
        const newBid = new Bid({ nftId, userId, amount }); // Create a new bid
        await newBid.save(); // Save the bid to the database
        res.status(201).json(newBid); // Send the created bid as a response
    } catch (error) {
        res.status(500).json({ message: 'Error placing bid', error }); // Handle errors
    }
};