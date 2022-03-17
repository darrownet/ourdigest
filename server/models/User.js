const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const AdminSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = User = mongoose.model("users", AdminSchema);