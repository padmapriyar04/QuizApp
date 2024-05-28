const mongoose = require('mongoose');

const answer_schema = new mongoose.Schema({
    UserName: {
        type: String
    },
    result :{
        type : Array,
        default: [],
    },
    Attempts : {
        type: Number,
        default: 0,
    },
    points : {
        type : Number,
        default: 0,
    },
    achieved: {
        type: String,
        default: '',
    },
    createdAt : {
        type: Date,
        default: Date.now,
    }
})

const result = mongoose.model('result', answer_schema);

module.exports = result;