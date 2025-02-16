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
    email: {
        type: String,
        unique: true
    },
    username: {
        type: String,
        unique: true
    },
    password: String,
    gender: String,
    age: Number,
    phone: String,
    bio: String,
    hobbies: [String],
    occupation: String,
    dob: Date,
    location: String,
    stateOfOrigin: String,
    isRich: Boolean,
    picture: String
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;