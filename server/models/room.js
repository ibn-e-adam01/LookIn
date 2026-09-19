const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    residence_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'residence'
        }, 

    roomName: String,
    roomArea: String,
    floorMaterial: String,
    wallFinish: String,
    windows: Number,
    ceilingHeight: String,
    roomImage : String,
    uploadDateRoom: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('room', roomSchema);