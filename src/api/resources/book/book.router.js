// 3rd party libraries
const express = require('express');

// own files
const bookController = require('./book.controller');

// create the book router
const bookRouter = express.Router();

// define the routes
bookRouter.route('/')
    .get(bookController.getAll)
    .post(bookController.create);

bookRouter.route('/:id')
    .patch(bookController.update)
    .delete(bookController.delete);

module.exports = bookRouter;