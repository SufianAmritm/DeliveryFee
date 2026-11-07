# DeliveryFee

REST API for managing **delivery fees** by city, zone and seller, built with **Express**, **Knex** and **PostgreSQL**.

## Features
- CRUD endpoints for cities, zones, sellers and delivery fees
- DTOs and request validation (Joi, express-validator)
- Shared services and a transaction layer for get, insert, update and delete
- Custom error classes with a central error handler and 404 middleware
- Knex migrations

## Tech
Node.js · Express · Knex · PostgreSQL · Joi

## Project structure

```
app.js
src/
├─ controllers/   # city, zone, seller, delivery-fee
├─ dto/
├─ routes/
├─ services/
├─ validator/
└─ middleware/    # not-found and error handler
db/
├─ migrations/
└─ transactions/  # get, insert, update, delete
common/
├─ constants/
├─ errors/
└─ utils/
```

## Run

```bash
npm install
# set your PostgreSQL connection in .env
npx knex migrate:latest --knexfile db/knex-file.js
npm start
```
