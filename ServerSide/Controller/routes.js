const express = require('express')

const router = express.Router();

const {connectToDB} = require('../db')

const slippers = require('../Models/slipperSchema')
const crocs = require('../Models/crocsSchema')
connectToDB()

router.get("/slippers", async (req,res)=>{
    try{
        const brands = await slippers.find()
        res.json(brands)
    }
    catch(err){
        res.status(500).send("An error occured :", err)
    }
})

router.get("/crocs", async (req,res)=>{
    try{
        const brands = await crocs.find()
        res.json(brands)
    }
    catch(err){
        res.status(500).send("An error occured :", err)
    }
})

router.get('/:id', async(req, res)=>{
    try{
        const brands = await brand.findById(req.params.id) 
        res.json(brands)
    }
    catch(err){
        res.status(500).send("An error occured :", err)
    }
})

router.post('/add', async(req, res)=>{
    const brands = new brand({
        brandName: req.body.brandName,
        brandCEO: req.body.brandCEO,
    })
    try{
        const any = await brands.save()
        res.json(any)
    }
    catch(err){
        res.status(500).send("An error occured :", err) 
    }
})

router.put('/:id', async(req, res)=>{
    try{
        const brands = await brand.findByIdAndUpdate(req.params.id, req.body,{new: true});
        if(!brands) {
            return res.status(404).send(" not found")
        } 
        res.json(brands);
    }
    catch(err){
        res.status(500).send("An error occured :", err)
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const brands = await brand.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!brands) {
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
        const brands = await brand.findByIdAndDelete(req.params.id);
        if (!brands) {
            return res.status(404).send("Not found");
        }
        res.send("Deleted Successfully");
    } catch (err) {
        res.status(500).send("An error occured :", err)
    }
})


module.exports = router