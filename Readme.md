# AGRO-ASSIGNMENT

This is a full-stack MERN (MongoDB, Express, React, Node.js) application.



## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

You need to have the following software installed on your system:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone the repository:

```
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```


2. Install dependencies

```
cd server
npm install
````

```
cd forntEnd
npm install
```

3. Set up environment variable

```
PORT = 3000
MONGODB_URL = "Run an Mongodb atlas free instance and add that uri here."
```

## Running the APP

1. Start the backend server:

```
cd server
node index.js

```

2. Start the frontend

```
cd frontEnd
npm start

```

## Testing the Application

### Using Postman

1. Open the Postman workspace link: [Postman Workspace](https://www.postman.com/lunar-module-technologist-31299720/workspace/agroassignment/collection/26732563-365c41c3-de5e-4692-8c07-990d517d00cc?action=share&creator=26732563)
2. Follow the API structure outlined below to test the various endpoints.

### API Endpoint Structure

Base URL: `localhost:3000/api/v1/products/`

#### Endpoints

- **GET /ping**
  - Description: Test endpoint to check the health of the product service.
- **POST /addProduct**
  - Description: Adds a new product to the database.
- **GET /fetchAllProduct**
  - Description: Retrieves all products from the database.
- **POST /insertDummyData**
  - Description: Inserts dummy data into the product database for testing purposes.
