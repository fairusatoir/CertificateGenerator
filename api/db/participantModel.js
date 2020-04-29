const mongoose = require('mongoose')

const participantSchema = new mongoose.Schema( {
    noParticipant:{
        type: String,
        required:true,
        default: 000,
        max:3,
        unique: true
    },
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
