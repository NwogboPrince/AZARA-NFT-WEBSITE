const NFT = require('../models/NFT');
const Bid = require('../models/Bid');

// Create a new NFT
exports.createNFT = async (req, res) => {
    try {
        const { title, description, image, creator } = req.body;
        const newNFT = new NFT({ title, description, image, creator });
        await newNFT.save();
        res.status(201).json({ message: 'NFT created successfully', nft: newNFT });
    } catch (error) {
        res.status(500).json({ message: 'Error creating NFT', error: error.message });
    }
};

// Get all NFTs
exports.getAllNFTs = async (req, res) => {
    try {
        const nfts = await NFT.find();
        res.status(200).json(nfts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching NFTs', error: error.message });
    }
};

// Get NFT by ID
exports.getNFTById = async (req, res) => {
    try {
        const nft = await NFT.findById(req.params.id);
        if (!nft) {
            return res.status(404).json({ message: 'NFT not found' });
        }
        res.status(200).json(nft);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching NFT', error: error.message });
    }
};

// Update NFT
exports.updateNFT = async (req, res) => {
    try {
        const updatedNFT = await NFT.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedNFT) {
            return res.status(404).json({ message: 'NFT not found' });
        }
        res.status(200).json({ message: 'NFT updated successfully', nft: updatedNFT });
    } catch (error) {
        res.status(500).json({ message: 'Error updating NFT', error: error.message });
    }
};

// Delete NFT
exports.deleteNFT = async (req, res) => {
    try {
        const deletedNFT = await NFT.findByIdAndDelete(req.params.id);
        if (!deletedNFT) {
            return res.status(404).json({ message: 'NFT not found' });
        }
        res.status(200).json({ message: 'NFT deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting NFT', error: error.message });
    }
};