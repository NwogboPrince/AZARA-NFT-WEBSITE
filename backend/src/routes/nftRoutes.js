const express = require('express');
const router = express.Router();
const nftController = require('../controllers/nftController');

// Route to create a new NFT
router.post('/create', nftController.createNFT);

// Route to get all NFTs
router.get('/', nftController.getAllNFTs);

// Route to get a specific NFT by ID
router.get('/:id', nftController.getNFTById);

// Route to update an NFT
router.put('/:id', nftController.updateNFT);

// Route to delete an NFT
router.delete('/:id', nftController.deleteNFT);

// Route to get trending NFTs
router.get('/trending', nftController.getTrendingNFTs);

// Route to get NFTs by collection
router.get('/collection/:collectionId', nftController.getNFTsByCollection);

module.exports = router;