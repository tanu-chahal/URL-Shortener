# URL Shortener

This is a simple URL shortening service built with ExpressJS, NodeJS, and MongoDB. 
- Users can provide a URL and receive a short ID for their URL. 
- Visiting the short ID URL with the application domain will redirect the user to their original URL.
- Users can get visit analytics for their shortened url.

## Features

- Shorten a long URL to a short ID.
- Redirect to the original URL using the short ID.

## Prerequisites

- Node.js
- npm
- MongoDB

## Getting Started

### Clone the Repository

```bash
git clone <repository-url>
cd <repository-directory>
```

### Install Dependencies
```bash
npm install
```

### Setup Environment Variables
Create a ```.env``` file in the root directory and set up the MONGO_URI variable with your MongoDB connection string.

```
MONGO_URI= <your_mongodb_connection_string>
```

### Run the Application
To run the application locally at ```http://localhost:4000/```, use the following command:

```bash
npm run dev
```

## API Endpoints

### Shorten URL
Endpoint: ```/url```

Method: ```POST```

Request Body:
```json
{
  "url": "https://example.com"
}
```

Response:
```json
{
  "shortId": "abc123"
}
```

### Redirect to Original URL
Endpoint: ```/:shortId```

Method: ```GET```

Description: Visiting this endpoint will redirect to the original URL associated with the short ID.

### Analytics of Shortened URL
Endpoint: ```/url/analytics/:shortId```

Method: ```GET```

Response:
```json
{
    "totalClicks": <number-of-clicks>,
    "analytics": [
        <visit-history-timestamps>
    ]
}
```

## Project Structure
```bash
.
├── .env
├── README.md
├── package.json
├── package-lock.json
├── .gitignore
├── connectDB.js
├── index.js
├── models
│   └── url.model.js
├── routes
│   └── url.route.js
└── controllers
    └── url.controller.js
```

## That's it, thanks for visiting our porject :)