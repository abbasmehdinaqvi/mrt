
const path=require('path')
const express=require('express')
const hbs=require('hbs')
const cors = require('cors');
const app=express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const port=process.env.PORT || 3000

app.use(cors());
//define paths for express config
const publicpath=path.join(__dirname,'../public')
const viewspath=path.join(__dirname, '../templates/views')
const partialspath=path.join(__dirname, '../templates/partials')

// Routes
const registration = require('./Routes/registeration');
const doctor_login = require('./Routes/doctor_login');
const patient_login = require('./Routes/patient_login');
const prescription = require('./Routes/prescription');

//setup handlebars engine and view location
app.set('view engine', 'hbs')
app.set('views', viewspath)
hbs.registerPartials(partialspath)

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.connect('mongodb://127.0.0.1:27017/mrt', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('error', () => console.log('Error in Connecting to database'))

db.once('open', () => console.log("Connected to Database"))


//setup static directory to serve
app.use(express.static(publicpath))
app.use(registration);
app.use(doctor_login);
app.use(patient_login);
app.use(prescription);

app.listen(port,()=>{
    console.log('Server is up')
})