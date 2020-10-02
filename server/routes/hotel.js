const express = require ('express')
const router = express.Router()
const mongoose = require ('mongoose')
const Hotel = require ('../models/Hotel')


// add hotel  ( http://localhost:8000/hotel/add )
router.post('/add',(req, res) => {
    const newHotel = new Hotel(req.body);
    newHotel
    .save()
    .then(hotel => res.json(hotel))
    .catch(err => console.error(err))
})

// get all hotels
router.get('/', (req,res)=> {
    Hotel.find()
    .then(hotels => res.json(hotels))
    .catch(err =>console.error(err));
});
// get one hotel 
router.get("/:id", (req,res) =>{
    const _id = req.params.id
    Hotel.findById({_id})
    .then(hotel => res.json(hotel))
    .catch(err => console.error(err))
})
// delete a hotel 
router.delete("/:id", (req,res) =>{
    const _id = req.params.id
    Hotel.findByIdAndRemove({_id})
    .then(hotel => res.json({message:"hotel deleted", hotel}))
    .catch(err => console.error(err))
})
// update a hotel
router.put("/:id", (req,res) =>{
    const _id = req.params.id
    const updateHotel =req.body
    Hotel.findByIdAndUpdate({_id}, updateHotel)
    .then(hotel => res.json({message:"hotel updated", hotel}))
    .catch(err => console.error(err))
})


module.exports = router
