// File: src/app.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env
dotenv.config();

// Import Routes
const authRoutes = require('./routes/authRoutes');
const nftRoutes = require('./routes/nftRoutes');
const bidRoutes = require('./routes/bidRoutes');
const marketRoutes = require('./routes/marketRoutes');
const walletRoutes = require('./routes/walletRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/nfts', nftRoutes);
app.use('/api/bids', bidRoutes);
app.use('/api/market', marketRoutes);
app.use('/api/wallets', walletRoutes);

// Serve frontend (if applicable)
app.use(express.static(path.join(__dirname, '../public')));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
