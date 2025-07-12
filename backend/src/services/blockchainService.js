const Web3 = require('web3');
const { NFT_CONTRACT_ADDRESS, NFT_ABI } = require('../config');

class BlockchainService {
    constructor() {
        this.web3 = new Web3(new Web3.providers.HttpProvider(process.env.INFURA_URL));
        this.nftContract = new this.web3.eth.Contract(NFT_ABI, NFT_CONTRACT_ADDRESS);
    }

    async connectWallet(walletAddress) {
        try {
            const balance = await this.web3.eth.getBalance(walletAddress);
            return this.web3.utils.fromWei(balance, 'ether');
        } catch (error) {
            throw new Error('Failed to connect wallet: ' + error.message);
        }
    }

    async placeBid(nftId, bidAmount, walletAddress) {
        try {
            const bidInWei = this.web3.utils.toWei(bidAmount.toString(), 'ether');
            const transaction = await this.nftContract.methods.placeBid(nftId).send({
                from: walletAddress,
                value: bidInWei
            });
            return transaction;
        } catch (error) {
            throw new Error('Failed to place bid: ' + error.message);
        }
    }

    async fetchMarketData() {
        try {
            const totalSupply = await this.nftContract.methods.totalSupply().call();
            const marketData = [];
            for (let i = 0; i < totalSupply; i++) {
                const nft = await this.nftContract.methods.nfts(i).call();
                marketData.push(nft);
            }
            return marketData;
        } catch (error) {
            throw new Error('Failed to fetch market data: ' + error.message);
        }
    }

    async fetchTrendingNFTs() {
        // This function can be implemented to fetch trending NFTs based on specific criteria
        // For now, returning an empty array as a placeholder
        return [];
    }
}

module.exports = new BlockchainService();