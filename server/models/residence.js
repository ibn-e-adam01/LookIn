const mongoose = require('mongoose');

const residenceSchema = mongoose.Schema({
    designer: {type: String,
        unique: true,
        lowercase: true
    },

    projectTitle: String,
    propertyType: String,
    shortDescription: String,
    residenceImage: String,
    rooms: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'room'
        }
    ],

    uploadDate: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('residence', residenceSchema);