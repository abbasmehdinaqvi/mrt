const express = require('express');
require('./db/conn');
const Student = require(".models/Students");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json())
//create a new student

app.post('/students' , (req ,res) => {
    res.send("hello from the other side");

})

app.listen(port , () => {
    console.log(`connection is setup at ${port}`);
})

