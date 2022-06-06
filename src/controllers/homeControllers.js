const router = require('express').Router();
const cubeServices = require('../services/cubeServices');

router.get('/', (req, res) => {
    const { search, from, to } = req.query;

    const cubes = cubeServices.getAll(search, from, to);

    res.render('index', { cubes });
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;
