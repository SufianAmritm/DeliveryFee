require('dotenv').config();

const express = require('express');
const app = express();
const morgan = require('morgan');
const mainRouter = require('./src/routes/main-routes');
const notFoundMiddleware = require('./src/middleware/not-found');
const errorMiddleware = require('./src/middleware/error-handler');

app.use(express.json());
app.use(morgan('dev'));
// routes
app.use('/api', mainRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT;

const start = async () => {
    try {
        app.listen(port, () => console.log(`Server is listening port ${port}...`));
    } catch (error) {
        error;
    }
};

start();
