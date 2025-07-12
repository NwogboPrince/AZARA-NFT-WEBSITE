# NFT Marketplace Backend Documentation

## Overview
This backend application serves as the server-side component of the NFT Marketplace. It is built using Node.js and Express, providing RESTful APIs for user authentication, NFT management, bidding, and wallet operations.

## Project Structure
The backend is organized into several directories and files:

- **src/**: Contains the main application code.
  - **controllers/**: Contains the logic for handling requests and responses.
    - `authController.js`: User authentication functions (login, registration).
    - `bidController.js`: Functions for managing bids (placing bids, retrieving bid history).
    - `marketController.js`: Functions for managing the marketplace (fetching market data, trending NFTs).
    - `nftController.js`: Functions for handling NFT operations (creating, updating, retrieving NFTs).
    - `walletController.js`: Functions for wallet management (connecting wallets, retrieving balances).
  - **models/**: Contains the data models for the application.
    - `Bid.js`: Defines the Bid model.
    - `NFT.js`: Defines the NFT model.
    - `User.js`: Defines the User model.
    - `Wallet.js`: Defines the Wallet model.
  - **routes/**: Contains the route definitions for the application.
    - `authRoutes.js`: Authentication-related routes.
    - `bidRoutes.js`: Bid-related routes.
    - `marketRoutes.js`: Market-related routes.
    - `nftRoutes.js`: NFT-related routes.
    - `walletRoutes.js`: Wallet-related routes.
  - **services/**: Contains service files for business logic.
    - `blockchainService.js`: Functions for interacting with blockchain APIs.
    - `walletService.js`: Functions for managing wallet operations.
  - **utils/**: Contains utility functions.
    - `helpers.js`: General helper functions.
  - `app.js`: Main entry point for the application.
  - `config.js`: Configuration settings (database connection, environment variables).

## Getting Started
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd nft-marketplace-app/backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm start
   ```

4. **API Documentation**: Refer to the individual controller files for detailed API endpoints and usage.

## Features
- User authentication (registration and login).
- NFT management (create, update, retrieve).
- Bidding functionality (place bids, view bid history).
- Wallet connection and management.

## Technologies Used
- Node.js
- Express
- MongoDB (or any other database as per your choice)
- Mongoose (for MongoDB object modeling)

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.