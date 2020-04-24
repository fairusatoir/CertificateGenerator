const mongoose = require('mongoose')

const participantSchema = new mongoose.Schema( {
    participantName: {
        type: String,
        required:true,
        trim:true
    },
    trainingId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'Training'
    }
})

module.exports = mongoose.model('participant',participantSchema)
