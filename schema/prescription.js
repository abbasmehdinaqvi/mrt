const mongoose = require("mongoose");
const validator = require("validator");

const prescriptionSchema = mongoose.Schema({
    email: {
        type: String,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }
    },

    date: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: false,
        min: 1
    },

    weight: {
        type: Number,
        required: false,
        min: 1
    },

    bp: {
        type: Number,
        required: false,
        min: 1
    },

    prescription: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Prescription', prescriptionSchema);