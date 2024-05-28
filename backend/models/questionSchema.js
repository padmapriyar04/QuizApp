const mongoose = require('mongoose');

const question_schema = new mongoose.Schema({
    questions:{
        type: Array,
        default: [],
    },
    answers:{
        type: Array,
        default: [],
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

const question_model = mongoose.model('Question',question_schema);

module.exports = question_model;