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
        res.status(400).send(e)
    }
})

router.get('/training/:id', async(req,res)=> {

    try {
        const participant = await Participant.find({trainingId: req.params.id})
        res.send(participant)
    } catch (e) {
        res.status(404).send(e)
    }
})

router.patch('/participant/edit/:id', async(req,res)=> {
    const updates = Object.keys(req.body)
    const allowedUpdate = ['participantName']
    const isValidOperation = updates.every((update) => allowedUpdate.includes(update))

    if(!isValidOperation) {
        return res.status(400).send({ error : 'Invalid Update!'})
    }
    
    try {
        const participant = await Participant.findById({_id: req.params.id})
        
        
        if (!participant){
            return res.status(404).send()
        }

        updates.forEach((update) => participant[update] = req.body[update])
        await participant.save()
        res.send('Update Complate')
    } catch (e) {        
        res.status(400).send(e)
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