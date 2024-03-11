const express = require('express')

const router = express.Router();

const {connectToDB} = require('../db')

const reviews = require('../Models/ReviewSchema')
const schema  = require('./../Models/joiSchema')
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

        const {error, value} = schema.validate(req.body, {abortEarly : false})
        if(error){
            return res.status(500).json(error)
        }
        const review = new reviews(req.body)
        const saving = await review.save()
        res.status(201).json(saving)
    }
    catch(error){
        console.log(error.message)
        res.send(error.message)
    }
})


router.patch('/update/:id', async (req, res) => {
    try {
        const review = await reviews.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!review) {
            return res.status(404).send("Review not found");
        } 
        res.json(review);
    } catch (err) {
        console.error("Error updating review:", err);
        res.status(500).send("An error occurred while updating the review.");
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