// 3rd party libraries
const express       = require('express'),
      bodyParser    = require('body-parser');

// own files
const env           = require('./config/config'),
      mongoose      = require('./src/database/mongoose'),
      restRouter    = require('./src/api/api-routes');

// create app instance and get port
const app = express();
const port = process.env.PORT;

// configure app
app.use(bodyParser.json())

// map the app routes
app.use('/api', restRouter);


// bind app to the port
app.listen(port, () => {
    console.log(`booktique is up and running in the ${env} mode on port ${port}`);
});