
const Cube = require('../models/Cube');

exports.getAll = async (search = '', from = 0, to = 6) => {
    return await Cube.find().lean();

    // const result = cubes
    // .filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
    // .filter(x => x.difficultyLevel >= from && x.difficultyLevel <= to);
};

exports.getOne = (cubeId) => Cube.findById(cubeId);

exports.create = (cube) => Cube.create(cube);

