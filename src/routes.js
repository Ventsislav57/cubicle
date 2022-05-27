const express = require('express');

const homeControllers = require('./controllers/homeControllers');

const router = express.Router();

router.get('/', homeControllers.index);

module.exports = router