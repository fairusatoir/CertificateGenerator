const express = require('express')
const Participant = require('../db/participantModel')
const router = new express.Router()

router.post('/participant/new/:id', async (req,res)=> {
    const participant = new Participant({
        ...req.body,
        trainingId: req.params.id
    })

    try {
        await participant.save()
        res.status(201).send(participant)
    } catch (e) {
        // console.log(e);
        
        res.send(e)
    }
})

router.get('/participant/:id', async(req,res)=> {    
    try {        
        const participant = await Participant.find({trainingId: req.params.id})
        
        res.send(participant)
    } catch (e) {
        res.status(404).send(e)
    }
})

// router.get('/countparticipant/:id', async(req,res)=> {     
//     try {        
//         const participant = await Participant.findById({_id: req.params.id})
//         const =idparticipant.trainingId
        
//         // const participant = await Participant.find({})

//         Participant.countDocuments({trainingId: req.params.id},function(err, result){
//             res.json(result)
//         })
//         res.send(participant.trainingId)        
//     } catch (e) {
//         res.status(404).send(e)
//     }
// })

// router.get('/checkparticipant/:id', async(req,res)=> {    
//     const idnumber = req.params.id
     
//     try {        
//         const participant = await Participant.findById({_id:idnumber})
        
//         console.log(participant);    
        
//         Participant.countDocuments({noParticipant: number},function(err, result){
//             // console.log(result);
//             res.json(result)
//         })
        
//     } catch (e) {
//         res.status(404).send(e)
//     }
// })


router.get('/participant', async(req,res)=> {    
    try {        
        const participant = await Participant.find({})

        Participant.countDocuments({trainingId:"5ea7dab69e4620194d3e5627"},function(err, result){
            // console.log(result);
        })
        
        res.send(participant)
    } catch (e) {
        res.status(404).send(e)
    }
})

router.get('/participant/a/:id', async(req,res) => {
    try {
        const participant = await Participant.findById({_id: req.params.id})

        if (!participant) {
            return res.status(404).send()
        }      

        res.send(participant)
    } catch (e) {
        res.status(500).send()
    }
})

router.put('/participant/edit/:id', async(req,res)=> {
    try {
        const participant = await Participant.findOneAndUpdate({_id: req.params.id},req.body)
        
        
        if (!participant){
            return res.status(404).send()
        }

        // updates.forEach((update) => participant[update] = req.body[update])
        await participant.save()
        res.send('Update Complate')
    } catch (e) {   
        console.log(e);     
        res.send(e)
    }
})

router.delete('/participant/:id', async(req,res) => {
    try {
        const participant = await Participant.findByIdAndDelete({_id: req.params.id})

        if (!participant) {
            return res.status(404).send()
        }

        res.send('Delete Complate')
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router