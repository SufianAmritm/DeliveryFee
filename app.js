require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const Router = require("./routes/ContainerRoutes");
// const notFoundMiddleware = require("./middleware/not-found");
// const errorMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// routes

app.use("/container", Router);
// // products route

// app.use(notFoundMiddleware);
// app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
