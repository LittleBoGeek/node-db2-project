const express = require('express')
const knex = require ('knex')
const db = require('../data/db-config')

const router = express.Router();


router.get('/', (req,res) => {
    db('cars')
    .then(details => {
        res.json(details)
    })
    .catch(err => {
        res.status(500).json({message:"There was an error"})
    })
})

router.get("/:id", (req,res) => {
    const { id } = req.params;

    db('cars').where({id}).first()
    .then(details => {
        res.json(details)
    })
    .catch(err => {
        res.status(500).json({message:"There was an error"})
    })
})

router.post('/', (req,res) => {
    const updateInfo = req.body
    db('cars').insert(updateInfo)
    .then((update) => {
        res.status(201).json(update)
    }) .catch((error) => {
        res.status(500).json({error:"There was an error"})
    } )
  
})


module.exports = router


