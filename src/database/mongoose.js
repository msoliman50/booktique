// 3rd party libraries
const mongoose = require('mongoose');

// mongoose configuration
mongoose.Promise = global.Promise;

// database connection
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

module.exports = mongoose;
