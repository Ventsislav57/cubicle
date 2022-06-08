const mongoose = require('mongoose');


const cubeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxlength: 150,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: function () {
                return this.imageUrl.startsWith('http')
            },
            message: 'ImageUrl must be a link!'
        }
    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6,
    },
    accessories: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Accessory'
        }
    ] 

});

// cubeSchema.path('imageUrl').validate(function () {
//     return this.imageUrl.startsWith('http');
// }, 'Wrong imageUrl!');


const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;