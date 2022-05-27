const fs = require('fs/promises');
const path = require('path');

const cubes = require('../db.json');

exports.getOne = (cubeId) => cubes[cubeId];

exports.save = (cube) => {
    cubes.push(cube);

    let textData = JSON.stringify(cubes, '', 2);
    return fs.writeFile(path.resolve('src', 'db.json'), textData, { encoding: 'utf-8' });
}
