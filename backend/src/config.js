module.exports = {
  PORT: process.env.PORT || 5000,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/nft-marketplace',
  JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
  BLOCKCHAIN_API_URL: process.env.BLOCKCHAIN_API_URL || 'https://api.blockchain.com',
  WALLET_CONNECT_URL: process.env.WALLET_CONNECT_URL || 'https://walletconnect.org',
  // Add other configuration settings as needed
};