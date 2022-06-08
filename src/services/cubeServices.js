
const Accessory = require('../models/Accessory');
const Cube = require('../models/Cube');

exports.getAll = async (search = '', from = 0, to = 6) => {
    return await Cube.find().lean();

    // const result = cubes
    // .filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
    // .filter(x => x.difficultyLevel >= from && x.difficultyLevel <= to);
};


exports.getOne = (cubeId) => Cube.findById(cubeId).populate('accessories');

exports.create = (cube) => Cube.create(cube);

exports.attachAccessory = async (cubeId, accessoryId) => {

    const cube = await Cube.findById(cubeId);
    const accessory = await Accessory.findById(accessoryId);

    cube.accessories.push(accessory);
    accessory.cubes.push(cube);

    await cube.save();
    await accessory.save();
};
