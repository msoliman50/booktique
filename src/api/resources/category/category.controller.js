// 3rd party libraries
const _             = require('lodash'),
      {ObjectId}    = require('mongodb');

// own libraries
const Category = require('./category.model');

module.exports = {

    // get all categories
    async getAll(req, res) {
        try {
            // get categories
            const categories = await Category.find();
            return res.json({message: 'cateogires retrived successfully', categories});
        } catch(e) {
            return res.status(500).json({message: 'Unable to get categories'});
        }
    },

    // create category
    async create(req, res) {

        // get category properties
        const body = _.pick(req.body, ['name', 'description']);

        try {
            // create category
            const category = await Category.create(body);
            return res.json({message: 'category has been created successfully', category});
        } catch (e) {
            return res.status(500).json({message: 'Unable to create category'});
        }
    },

    // update category
    async update(req, res) {

        // get category id and validate it
        const id = req.params.id;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({message: 'Invalid category id'})
        }

        // get updated properties
        const body = _.pick(req.body, ['name', 'description', 'books', 'subcategories']);

        try {
            // update category
            const category = await Category.findByIdAndUpdate(id, body, {new: true});
            return res.json({message: 'category has been updated successfull', category});
        } catch(e) {
            return res.status(500).json({message: 'Unable to update category'});
        }

    },

    // delete category
    async delete(req, res) {
        
        // get category id and validate it
        const id = req.params.id;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({message: 'Invalid category id'})
        }

        try {
            // delete category
            const category = await Category.findByIdAndDelete(id);
            return res.json({message: 'category has been deleted successfull', category});
        } catch(e) {
            return res.status(500).json({message: 'Unable to delete category'});
        }

    }
}