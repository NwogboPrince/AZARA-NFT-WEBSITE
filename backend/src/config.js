module.exports = {
  PORT: process.env.PORT || 5000,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/nft-marketplace',
  JWT_SECRET: process.env.JWT_SECRET || 'ac261b70955e580a573c918e26280c714901c19271a798658b151615ef0d435e',
  BLOCKCHAIN_API_URL: process.env.BLOCKCHAIN_API_URL || 'https://api.blockchain.com',
  WALLET_CONNECT_URL: process.env.WALLET_CONNECT_URL || 'https://walletconnect.org',
  // Add other configuration settings as needed
};