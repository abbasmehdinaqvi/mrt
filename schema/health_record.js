const mongoose = require("mongoose");
const validator = require("validator");

const healthRecordSchema = mongoose.model({
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

    height: {
        type: String,
        required: false
    },

    bp: {
        type: Number,
        required: false,
        min: 1
    },

    bloodgroup: {
        type: String,
        required: false
    },

    

    allergies: {
        type: String,
        required: false
    },

})

const HealthRecord = new mongoose.model('HealthRecord', healthRecordSchema);
module.exports = HealthRecord;