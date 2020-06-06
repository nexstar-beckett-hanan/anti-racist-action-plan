const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config()

const app = express();
const router = require('./routes/router');
const PORT = 3000;

// enables us to get data from HTTP POST requests
app.use(bodyParser.urlencoded({ extended: true }));
// enables us to get JSON on an incoming request at req.body
app.use(bodyParser.json());

// define route handlers
app.use('/api', router);

console.log(`process.env.NODE_ENV is ${process.env.NODE_ENV}`);

// build folder and index.html are only needed from the express server if we're in production
// (otherwise, webpack-dev-server handles serving them up)
if (process.env.NODE_ENV === 'production') {
  // handle requests for static files using everything in the build folder
  app.use('/public', express.static(path.join(__dirname, '../build')));

  // route handler for the main app
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
  });
}

// catch-all route handler for any requests to an unknown route
app.get('*', (req, res) => {
  res.sendStatus(404);
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };

  // create an object and put into it the defaultErr overwritten with the err object parameter (if it was passed in)
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(process.env.PORT || PORT, (err) => {
  if (!err) {
    console.log(`Server listening on port: ${process.env.PORT || PORT}`);
  } else {
    console.log(`Server error after attempting to listen on Port ${process.env.PORT || PORT}. Error is ${err}`);
  }
});
