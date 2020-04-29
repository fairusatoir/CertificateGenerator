const express = require('express')
const moment = require('moment');
const Training = require('../db/trainingModel')
const Participant = require('../db/participantModel')
const router = new express.Router()

router.post('/training/new', async (req,res)=> {
    const training = new Training(req.body)
    
    const date = moment(training.date,'YYYY-MM-DD')
    training.date = date.locale("id").format('LL')

    const dateSign = moment(training.dateSign,'YYYY-MM-DD')
    training.dateSign = dateSign.locale("id").format('LL')

    try {       
        await training.save()
        res.status(201).send('Create Complate')
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/training', async(req,res)=> {
    
    try {        
        const training = await Training.find({}).sort({name:1})
        
        res.send(training)
    } catch (e) {
        console.log("gagal");
        
        res.status(404).send(e)
    }
})

router.get('/training/:id', async(req,res) => {
    try {        
        const training = await Training.findById({_id: req.params.id})
        if (!training) {
            return res.status(404).send()
        }      
        res.send(training)
    } catch (e) {
        res.status(500).send()
    }
})

router.put('/training/edit/:id', async(req,res)=> {
    
    try {        
        const training = await Training.findOneAndUpdate({_id: req.params.id},req.body)

        if (!training){
            return res.status(404).send()
        }
        res.send('Update Complate')

    } catch (e) {        
        res.status(400).send(e)
        console.log("400");
    }
})

router.delete('/training/:id', async(req,res) => {
    try {
        await Participant.deleteMany({trainingId: req.params.id})
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