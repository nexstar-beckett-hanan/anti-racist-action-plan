const db = require('../models/models');

const controller = {};

controller.getActions = (req, res, next) => {
  // save our PostresSQL query
  const selection = 'SELECT * FROM actions;';
  db.query(selection)
    .then((results) => {
      res.locals.actions = results.rows;
      next();
    })
    .catch((error) => next(error));
}

module.exports = controller;