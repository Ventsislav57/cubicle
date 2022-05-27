const express = require('express');

const homeControllers = require('./controllers/homeControllers');
const cubeControllers = require('./controllers/cubeControllers');

const router = express.Router();

router.use('/', homeControllers);
router.use('/cube', cubeControllers)

module.exports = router;