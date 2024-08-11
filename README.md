# Quotes API

This is a sample project that demonstrates using simple RESTful API for managing quotes. It allows users to create, read, update, and delete quotes, as well as retrieve a random quote.

## Features

- Get all quotes
- Create a new quote
- Get a specific quote by ID
- Update an existing quote
- Delete a quote
- Get a random quote

## Stack Used

- Node.js
- Express.js
- MongoDB
- log4js (for logging)

## Setup and Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Make sure MongoDB is installed and running on your local machine
4. Start the service: `node index.js`

The server will start running on `http://localhost:6666`.

## API Endpoints

- `GET /quotes` - Get all quotes
- `POST /quotes/new` - Create a new quote
- `GET /quotes/get/:id` - Get a specific quote by ID
- `DELETE /quotes/delete/:id` - Delete a quote
- `PATCH /quotes/update/:id` - Update a quote
- `GET /quotes/random` - Get a random quote

## Logging

This application uses log4js for logging. Logs are stored in `/api/api.log`.
