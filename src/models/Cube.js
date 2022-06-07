const mongoose = require('mongoose');


const cubeSchema = new mongoose.Schema({

    _id: mongoose.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 150
    },
    imageUrl: {
        type: String,
        required: true,
    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6
    }

});

cubeSchema.path('imageUrl').validate(function () {
    return this.imageUrl.startsWith('http');
}, 'Wrong imageUrl!');


const Cube = mongoose.Schema('Cube', cubeSchema);

module.exports = Cube;