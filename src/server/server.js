const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

console.log(`process.env.NODE_ENV is ${process.env.NODE_ENV}`);

// build folder and index.html are only needed from the express server if we're in production
// (otherwise, webpack-dev-server handles serving them up)
if (process.env.NODE_ENV === 'production') {
  // handle requests for static files using everything in the build folder
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // route handler for the main app
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
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
}

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server listening on port: ${PORT}`);
  } else {
    console.log(`Server error after attempting to lsiten on Port ${PORT}. Error is ${err}`);
  }
});
