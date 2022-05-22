const mongoose = require("mongoose");
const validator = require("validator");

const patientLoginSchema = mongoose.model({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email id already present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        max:10,
        required:true,
        unique:[true, "Phone number already present"]
    },
    password: {
        type: String,
        required: true
    }
})

const PatientLogin = new mongoose.model('PatientLogin' , patientLoginSchema);
module.exports=PatientLogin;