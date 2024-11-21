const express = require('express');
const authRoutes = require("./routes/authRoutes");
const testRoutes = require("./routes/testRoutes");
const morgan = require('morgan');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/', authRoutes);
app.use('/', testRoutes);

app.use(errorHandler);

module.exports = app;