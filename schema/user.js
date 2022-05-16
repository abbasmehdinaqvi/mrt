const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    userType : {
        type : String ,
        enum : ['Doctor', 'Patient'],
        required : true
    },
    name: {
        type: String,
        required: true,
        trim : true ,
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
    phone: {
        type: String,
        min: 10,
        max: 10,
        required: true,
        unique: [true, "Phone number already present"]
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('user', userSchema);
