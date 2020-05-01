const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    trainingName:{
        type: String,
        required:true,
        trim:true
    },
    certificateNumber: {
        type: String,
        required:true,
        trim:true,
    },
    date: {
        type: String,
        required:true,
        trim: true,
    },
    dateSign: {
        type: String,
        required:true,
        trim: true,
    },
    place: {
        type: String,
        trim: true,
        required:true,
    },
    theories:  [{
            type: String,
            required:true,
            trim: true,
    }]
})

module.exports = mongoose.model('training', taskSchema);
