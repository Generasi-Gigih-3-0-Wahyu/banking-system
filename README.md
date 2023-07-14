
# Banking System
#### Author: [Whauzan](https://www.showwcase.com/whauzan)

This is repository for Generasi Gihih 3.0 - [GoTo Impact Foundation]([goto-impact.org](https://www.goto-impact.org/))

## Features

- `GET` http://localhost:5002/api/v1/customers/ - Get All Customers
- `POST` http://localhost:5002/api/v1/customers/ -  Create Customer
	- Request Body :
	`{ "name": "User 1", "email": "user1@mail.com", "balance": 100000 }`
- `GET` http://localhost:5002/api/v1/transactions/ - Get All Transactions
- `POST` http://localhost:5002/api/v1/transactions/ - Create Transaction
	- Request Body : 
	`{ "sourceId": "64b1585a3a7388956c4c0142", "destinationId": "64b1561ae7ddfe27c292e58a", "amount": 10000 }`

## Tech

This repository are using:

- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Typegoose](https://typegoose.github.io/typegoose/)
- [Nodemon](https://nodemon.io/)
- [Zod](https://zod.dev/)

## Installation

It requires [Node.js](https://nodejs.org/en) or using [Docker](https://www.docker.com/) to run.

Install the dependencies.

```sh
npm install
```

If you want to run the app using [Docker](https://www.docker.com/), make sure you already have docker on your device and skip the previous step.

## Running
Before running the application, make sure you already copy .env.example .env file and fill the environment variables.
```sh
npm run dev
```

If running with docker

```sh
docker compose up --build
```