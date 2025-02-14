const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required:true
    },
    lastName:{
        type: String,
        required:true
    },
    gender: String,
    age: Number,
    email: {
        type: String,
        unique: true
    },
    password: String,
    username: {
        type: String,
        unique: true
    },
    phone: String,
    bio: String,
    hobbies: [String],
    occupation: String,
    dob: Date,
    location: String,
    stateOfOrigin: String,
    isRich:{
        type: Boolean,
        required: true
    },
    picture: String
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;