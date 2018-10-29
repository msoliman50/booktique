// 3rd party libraries
const mongoose          = require('mongoose'),
      _                 = require('lodash'),
      mongoosePaginate  = require('mongoose-paginate');
      

const Schema = mongoose.Schema;

// define the book schema
let bookSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: String,
    price: {
        type: Number,
        default: 0,
    },
    authors: [{
        type: Schema.Types.ObjectId,
        ref: 'Author'
    }],
    image: String,
    categories: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }],
    subcategories: [{
        type: Schema.Types.ObjectId,
        ref: 'SubCategory'
    }],
    reviews: [{
        rate: {
            type: Number,
            require: [true, 'The review must has a rate'],
            min: 0,
            max: 5
        },
        comment: String
    }]
});

/*          custom instance methods         */

// define return properties
bookSchema.methods.toJSON = function() {
    const book = this;
    return _.pick(book, ['title', 'description', 'price']);
};


/*          custom model plugins         */

// paginate plugin
bookSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Book', bookSchema);