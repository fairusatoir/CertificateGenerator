const express = require('express')
const Training = require('../db/trainingModel')
const router = new express.Router()

router.post('/training', async (req,res)=> {
    const training = new Training(req.body)

    try {
        console.log(training);        
        await training.save()
        res.status(201).send('Create Complate')
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/training', async(req,res)=> {
    try {
        const training = await Training.find({})
        res.send(training)
    } catch (e) {
        res.status(404).send(e)
    }
})

router.patch('/training/edit/:id', async(req,res)=> {
    const updates = Object.keys(req.body)
    const allowedUpdate = ['trainingName','certificateNumber','date','dateSign','place','theories']
    const isValidOperation = updates.every((update) => allowedUpdate.includes(update))

    if(!isValidOperation) {
        return res.status(400).send({ error : 'Invalid Update!'})
    }
    
    try {
        const training = await Training.findById({_id: req.params.id})

        if (!training){
            return res.status(404).send()
        }

        updates.forEach((update) => training[update] = req.body[update])
        await training.save()
        res.send('Update Complate')
    } catch (e) {        
        res.status(400).send(e)
    }
})

router.delete('/training/:id', async(req,res) => {
    try {
        const training = await Training.findByIdAndDelete({_id: req.params.id})

        if (!training) {
            return res.status(404).send()
        }

        res.send('Delete Complate')
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router