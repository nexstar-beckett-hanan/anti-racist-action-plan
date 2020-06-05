const db = require('../models/models');

const controller = {};

controller.getActions = (req, res, next) => {
  // start off our PostresSQL query
  let selection = 'SELECT * FROM actions';

  // right now we ONLY put money or time, you can't select both, so no AND is needed yet
  if (req.query) {
    // in these first two cases, they selected money as their resource
    if (req.query.money == 5) {
      selection = selection.concat(' WHERE money=', req.query.money);
    }
    if (req.query.money > 5) {
      selection = selection.concat(' WHERE money<=', req.query.money);
    }
    // in this case, they selected time
    if (req.query.time) {
      selection = selection.concat(' WHERE time=', req.query.time);
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