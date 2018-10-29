// 3rd party libraries
const express = require('express');

// own libraries
const bookRouter        = require('./resources/book/book.router'),
      categoryRouter    = require('./resources/category/category.router');

// create the rest router
const restRouter = express.Router();

// map the api routes
restRouter.use('/books', bookRouter);
restRouter.use('/categories', categoryRouter);


module.exports = restRouter;
