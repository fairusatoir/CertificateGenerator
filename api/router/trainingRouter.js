const express = require('express')
const Training = require('../db/trainingModel')
const router = new express.Router()

router.post('/training/new', async (req,res)=> {
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
            console.log("404 Gak")
            return res.status(404).send()
        }

        updates.forEach((update) => training[update] = req.body[update])
        await training.save()
        res.send('Update Complate')
        console.log("Berhasil");

    } catch (e) {        
        res.status(400).send(e)
        console.log("400");
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