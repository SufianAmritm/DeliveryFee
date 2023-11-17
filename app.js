require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mainRouter = require('./src/routes/main-routes');
const notFoundMiddleware = require('./src/middleware/not-found');
const errorMiddleware = require('./src/middleware/error-handler');

app.use(express.json());

// routes

app.use('/api', mainRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT;

const start = async () => {
  try {
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
