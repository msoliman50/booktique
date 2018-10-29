// 3rd party libraries
const _             = require('lodash'),
      {ObjectId}    = require('mongodb');    

// own libraries
const Book = require('./book.model');


module.exports = {

    // get all books
     async getAll (req, res) {
         
        // pagination setup
        const {page, perPage} = req.query;
        const options = {
            page: parseInt(page, 10) || 1,
            limit: parseInt(perPage, 10) || 5 
        };

        try {
            // get all books
            const books = await Book.paginate({}, options); 
            return res.json({message: 'books retrieved successfully', books});
        } catch (e) {
            return res.status(500).json({message: 'Unable to get books'});
        }
    },

    // create new book
    async create (req, res) {

        // get request parameters
        const body = _.pick(req.body, ['title', 'description', 'price', 'categories', 'subcategories', 'authors']);

        try {
            // create the book instance
            const book = await Book.create(body);
            return res.json({message: 'created successfully', book});
        } catch (e) {
            return res.status(500).json({message: 'Unable to create book'});
        }
    },

    // update book
    async update(req, res) {

        // get book id and validate it
        const id = req.params.id;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({message: 'Invalid book id'});
        }

        // get updated properties
        const body = _.pick(req.body, ['title', 'description', 'price', 'categories', 'subcategories', 'authors']);

        try {
            // updating the fields
            const book = await Book.findByIdAndUpdate(id, body, {new: true});
            return res.json({message: 'book has been updated successfully', book});
        } catch (e) {
            return res.status(500).json({message: 'Unable to update the book'});
        }

    },
    
    // delete book
    async delete (req, res) {

        // get book id and validate it
        const id = req.params['id'];

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({message: 'Invalid Book id'});
        }

        try {
            // delete the book
            const book = await Book.findByIdAndDelete(id);
            return res.json({message: 'book deleted successfully', book});
        } catch (e) {
            return res.status(500).json({message: 'Unable to delete the book'});
        }

    }
};