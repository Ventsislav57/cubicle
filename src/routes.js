const express = require('express');

const homeControllers = require('./controllers/homeControllers');
const cubeControllers = require('./controllers/cubeControllers');

const router = express.Router();

router.get('/', homeControllers.index);
router.get('/about', homeControllers.about)
router.use('/cube', cubeControllers)

module.exports = router