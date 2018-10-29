// 3rd party libraries
const express = require('express');

// own libraries
const categoryController = require('./category.controller');

// create the category router
const categoryRouter = express.Router();

// define the routes
categoryRouter.route('/')
    .get(categoryController.getAll)
    .post(categoryController.create);

categoryRouter.route('/:id')
    .patch(categoryController.update)
    .delete(categoryController.delete);


module.exports = categoryRouter;