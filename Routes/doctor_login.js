const { request } = require('express');
const express = require('express');
const User = require('../schema/user');
const route = express.Router()

route.post('/doctor/login' , (req , res) => {
    User.findOne({
        userType : 'Doctor',
        email: req.body.email,
        password: req.body.password
       },
       (error, result) => {
           if(error) {
               res.send('Something went wrong!')
           }
           else if(result) {
               res.send('user Exist') // send home page
           }
           else{
               res.send('Wrong password');
           }
           
       }
    )
})

module.exports = route
