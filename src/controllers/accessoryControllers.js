const router = require('express').Router();

const accessoryServices = require('../services/accessoryServices');

router.get('/create', (req, res) => {
    res.render('accessory/create');
});

router.post('/create', async (req, res) => {

    await accessoryServices.create(req.body);
    res.redirect('/')
});

module.exports = router;