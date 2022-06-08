const router = require('express').Router();

const cubeServices = require('../services/cubeServices');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    const cube = req.body;

    try {
        await cubeServices.create(cube)
        res.redirect('/');
    } catch (error) {
        res.status(400).send(err);
    }
});

router.get('/details/:cubeId', async (req, res) => {
    const cube = await cubeServices.getOne(req.params.id).lean();

    res.render('details', { cube });
});

router.get('/attach-accessory/:cubeId', (req, res) => {
    res.render('accessory/attach');
});

module.exports = router