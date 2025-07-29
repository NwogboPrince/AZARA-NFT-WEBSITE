# AZARA NFT Marketplace

AZARA NFT Marketplace is a modern, responsive web application for discovering, collecting, and selling NFTs (Non-Fungible Tokens). Built with Tailwind CSS, DaisyUI, and Flowbite, it features a seamless user experience for browsing trending NFTs, placing bids, managing a cart, and connecting crypto wallets.

## Features

- **Home Page**: Hero section, trending NFTs, top artists, recent trades, and newsletter.
- **Trending Auctions**: Browse and place bids on popular NFTs.
- **Cart System**: Add bids to a cart, view and manage them before submitting.
- **Wallet Integration**: Connect with Metamask, WalletConnect, or Coinbase. Enter wallet info and submit bids securely.
- **User Registration**: Register with email and password before bidding.
- **Bid Placement**: Modal-based bid entry, cart storage (localStorage), and backend integration for bid submission.
- **Success Feedback**: Success modal and automatic page refresh after successful bid.
- **Responsive Design**: Fully responsive, mobile-friendly layout.
- **Modern UI**: Built with Tailwind CSS, DaisyUI, and Flowbite for a beautiful, modern look.

## Technologies Used

- **Frontend**: HTML5, Tailwind CSS, DaisyUI, Flowbite, Vanilla JS
- **Backend**: Express.js (API endpoints for registration, bidding, wallet info)
- **Storage**: localStorage for cart/bid management

## How It Works

1. **Browse NFTs**: View trending NFTs and top artists on the homepage.
2. **Place a Bid**: Click "Place a Bid" on any NFT card to open a modal and enter your bid amount.
3. **Cart Management**: Bids are added to your cart (stored in localStorage). View and manage your bids in the cart.
4. **Connect Wallet**: Click "Connect Wallet & Submit Info" in the cart to open a modal. Enter your name, wallet address, and bid price.
5. **Submit Bid**: On submission, your info is sent to the backend. A success modal appears, and the page refreshes.
6. **User Registration**: If not registered, you'll be prompted to register before bidding.

## Folder Structure

- `views/` — Contains all HTML files (index.html, trending.html, etc.)
- `public/` — Static assets (images, CSS, JS)
- `backend/` — Express.js backend (API endpoints)

## API Endpoints

- `POST /api/auth/register` — Register a new user
- `POST /api/place-bid` — Place a bid on an NFT
- `POST /api/wallets/submit` — Submit wallet and bid info

## Setup & Usage

1. **Clone the repository**
2. **Install dependencies** (backend):
   ```bash
   cd backend
   npm install
   ```
3. **Start the backend server**:
   ```bash
   node app.js
   ```
4. **Open `index.html` in your browser** (or serve with a static server)

## Customization
- Update NFT listings, images, and artist info in the HTML files.
- Adjust backend endpoints as needed for your blockchain integration.

## Credits
- UI inspired by modern NFT marketplaces.
- Built with Tailwind CSS, DaisyUI, and Flowbite.

## License
This project is for educational/demo purposes. Customize and use as needed.
