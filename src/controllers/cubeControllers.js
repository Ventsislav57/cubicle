const router = require('express').Router();

const cubeServices = require('../services/cubeServices');
const accessoryServices = require('../services/accessoryServices');

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
    const cube = await cubeServices.getOne(req.params.cubeId).lean();

    res.render('details', { cube });
});

router.get('/attach-accessory/:cubeId', async (req, res) => {

    const cube = await cubeServices.getOne(req.params.cubeId).lean();
    const accessories = await accessoryServices.getAll().lean();

    res.render('accessory/attach', { cube, accessories });
});

module.exports = router