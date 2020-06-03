const express = require('express');
const controller = require('../controllers/controller.js');

const router = express.Router();

router.get(
  '/',
  controller.getActions,
  (req, res) => res.status(200).json(res.locals.actions)
)

module.exports = router;