const express = require('express')

const router = express.Router();

const {connectToDB} = require('../db')

const reviews = require('../Models/ReviewSchema')
connectToDB()

router.get('/', async (req, res)=>{
    try{
        const review = await reviews.find()
        res.json(review)
    }
    catch (error){
        res.json({error: "An error has occured"})
    }
})

router.get('/:id', async (req, res) => {
    try{
        const review = await reviews.findById(req.params.id)
        res.json(blog) 
    }
    catch(error){
        res.json({error: "An error has occured"})
    }
})

router.post('/', async(req, res)=>{
    try{
        const review = new reviews(req.body)
        const saving = await review.save()
        res.status(201).json(saving)
    }
    catch(error){
        console.log(error.message)
        res.send(error.message)
    }
})

router.put('/:id', async(req, res)=>{
    try{
        const review = await reviews.findByIdAndUpdate(req.params.id);
        if(!review) {
            return res.status(404).send("Not found")
        } 
        res.json(review);
    }
    catch(err){
        res.status(500).send("An error occured :", err)
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const review = await reviews.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!review) {
            return res.status(404).send("Not found");
        } else {
            res.json(brands);
        }
    } catch (err) {
        res.status(500).send("An error occured :", err)
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const review = await reviews.findByIdAndDelete(req.params.id)
        if (!review) {
            return res.status(400).send("No result found")
        }
        res.send("Item deleted successfully")
    }
    catch (error) {
        res.status(400).json({error: "An error has been caught"})
    }
})

module.exports = router