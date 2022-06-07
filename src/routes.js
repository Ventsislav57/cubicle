const express = require('express');

const homeControllers = require('./controllers/homeControllers');
const cubeControllers = require('./controllers/cubeControllers');
const accessoryControllers = require('./controllers/accessoryControllers');


const router = express.Router();

router.use('/', homeControllers);
router.use('/cube', cubeControllers);
router.use('/accessory', accessoryControllers);


module.exports = router;