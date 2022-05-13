const mongoose = require("mongoose");
const validator = require("validator");

const prescriptionSchema = mongoose.model({
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

const Prescription = new mongoose.model('Prescription', prescriptionSchema);
module.exports = Prescription;