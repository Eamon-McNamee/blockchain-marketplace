

# Blockchain Marketplace

A simple React.js and Node.js application with blockchain integration.

## Table of Contents
- [Blockchain Marketplace](#blockchain-marketplace)
  - [Table of Contents](#table-of-contents)
  - [Setup Instructions](#setup-instructions)
    - [Backend](#backend)
    - [Frontend](#frontend)
  - [Running the Application](#running-the-application)
    - [Using Docker](#using-docker)
  - [Testing the API Endpoints](#testing-the-api-endpoints)
    - [Using Postman or Curl](#using-postman-or-curl)
      - [Get Items](#get-items)
      - [Add Item](#add-item)
  - [API Endpoints](#api-endpoints)
    - [GET /api/items](#get-apiitems)
    - [POST /api/items](#post-apiitems)
  - [React Application Components](#react-application-components)
    - [`App.js`](#appjs)
    - [`ItemsList.js`](#itemslistjs)
    - [`AddItemForm.js`](#additemformjs)
    - [`BlockchainStatus.js`](#blockchainstatusjs)
  - [License](#license)

## Setup Instructions

### Backend

1. **Navigate to the server directory:**
   ```bash
   cd server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Frontend

1. **Navigate to the client directory:**
   ```bash
   cd client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Run the setup script to create a `.env` file from the `.env.example` template:
   ```bash
   npm run setup-env
   ```
   
4. **Update the `.env` file with your actual values:**
   Open the `.env` file and replace the placeholder values with your actual values.
   ```env
   REACT_APP_TESTNET=sepolia
   REACT_APP_INFURA_API_KEY=your_infura_api_key_here
   ```

## Running the Application

### Using Docker

1. **Build and run the Docker containers:**
   ```bash
   docker-compose up --build
   ```

2. **Access the frontend application:**
   Open your browser and go to `http://localhost:3000`.

3. **Access the backend API:**
   The backend API is available at `http://localhost:8080/api`.

## Testing the API Endpoints

### Using Postman or Curl

#### Get Items
- **Endpoint:** `GET /api/items`
- **Description:** Retrieves a list of items.
- **Example Request:**
  ```bash
  curl http://localhost:8080/api/items
  ```

#### Add Item
- **Endpoint:** `POST /api/items`
- **Description:** Adds a new item.
- **Example Request:**
  ```bash
  curl -X POST http://localhost:8080/api/items -H "Content-Type: application/json" -d '{"name": "Example Item", "price": 100}'
  ```

## API Endpoints

### GET /api/items
- **Description:** Retrieves a list of items.
- **Response:** 
  ```json
  {
    "items": [
      {
        "name": "Playstation",
        "price": 600
      },
      {
        "name": "Nintendo",
        "price": 400
      }
    ]
  }
  ```

### POST /api/items
- **Description:** Adds a new item.
- **Request Body:**
  ```json
  {
    "name": "Item Name",
    "price": 100
  }
  ```
- **Response:**
  ```json
  {
    "message": "Item added successfully"
  }
  ```

## React Application Components

### `App.js`
- **Description:** The main component that renders the application.
- **Main functionality:**
  - Fetches items from the backend API and displays them.
  - Provides a form to add new items.

### `ItemsList.js`
- **Description:** A component to display a list of marketplace items.
- **Props:**
  - `items` (array): The list of items to display.

### `AddItemForm.js`
- **Description:** A component with a form to add new items.
- **Props:**
  - `onAddItem` (function): A function to handle adding a new item.

### `BlockchainStatus.js`
- **Description:** A component to display the status of the blockchain connection.
- **Main functionality:**
  - Connects to the blockchain network.
  - Displays network status and the latest block number.

## License

This project is licensed under the MIT License.
