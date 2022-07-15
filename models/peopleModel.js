const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    "name": {
        required: false,
        type: String
    },
    "lastName": {
        required: false,
        type: String
    },
    "age": {
        required: false,
        type: Number
    }
});

module.exports = mongoose.model("PeopleCollection", dataSchema);