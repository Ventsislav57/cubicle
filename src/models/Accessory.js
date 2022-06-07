const mongoose = require('mongoose');


const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: function () {
                return this.imageUrl.startsWith('http');
            }
        }
    },
    description: {
        type: String,
        required: true,
        maxlength: 150,
    }
});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;