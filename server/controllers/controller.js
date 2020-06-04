const db = require('../models/models');

const controller = {};

controller.getActions = (req, res, next) => {
  // start off our PostresSQL query
  let selection = 'SELECT * FROM actions';

  if (req.query) {
    if (req.query.money == 5) {
      selection = selection.concat(' WHERE money=', req.query.money);
    }
    if (req.query.money > 5) {
      selection = selection.concat(' WHERE money<=', req.query.money);
    }
  }
  // finish it with a semicolon
  selection = selection.concat(';');
  
  db.query(selection)
    .then((results) => {
      console.log('got actions');
      res.locals.actions = results.rows;
      next();
    })
    .catch((error) => next(error));
}

module.exports = controller;