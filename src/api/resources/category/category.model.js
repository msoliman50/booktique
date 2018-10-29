// 3rd party libraries
const mongoose  = require('mongoose'),
      _         = require('lodash');

// get Schema
const Schema = mongoose.Schema;

// create category schema
let categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    subcategories: {
        type: Schema.Types.ObjectId,
        ref: 'SubCategory'
    },
    books: {
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }
});


/*          custom instance methods         */

// define return properties
categorySchema.methods.toJSON = function() {
    const category = this;
    return _.pick(category, ['_id', 'name', 'description']);
};


module.exports = mongoose.model('Category', categorySchema);