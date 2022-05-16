const { request } = require('express');
const express = require('express');
const User = require('../schema/user');
const route = express.Router()

route.post('/registeration' , (req , res) => {
    
    User.findOne({
        email: req.body.email 
       },
       (error, result) => {
           if(error) {
               res.send('Something went wrong!')
           }
           else if(result) {
               res.send('User already exist')
           }
           else {
            const user = new User({
                userType: req.body.userType,
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                password: req.body.password
            })
            console.log(user);
            user.save((result) => {
                    res.send({
                        user: "user saved"
                    })
            })
           }
       }
    )
})

module.exports = route
