const { request } = require('express');
const express = require('express');
const prescription = require('../schema/prescription');
const User = require('../schema/user');
const route = express.Router()

route.post('/prescription' , (req , res) => {
    User.findOne({
        email: req.body.email 
       },
       (error, result) => {
           if(error) {
               res.send('Something went wrong!')
           }
           else if(result) {
                const pres = new prescription({
                    date : req.body.date ,
                    prescription : req.body.prescription
                })
                pres.save();
                res.send('Data Saved')
            }
           else {
            res.send('register first!');
           }
       }
    )
})

module.exports = route
