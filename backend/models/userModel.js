const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// Schema
const userSchema = new mongoose.Schema({
    // TODO: Add properties
    // loginInfo - email, password
    loginInfo: {
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true}
    },
    // personalInfo - firstName, lastName, address, phoneNumber, profileImageUrl
    personalInfo: {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        address: {type: String, required: true},
        phoneNumber: {type: String, required: true},
        profileImageUrl: {type: String, required: true, default: 'https://www.w3schools.com/howto/img_avatar.png'},
    },
    // isLogged - true/false
    isLogged: {type: Boolean, required: true, default: true},
    // subscriptionList - [{userId, userName, userImageUrl}]
    subcriptionList: {type: Array({
        userId: {type: String, required: true},
        userName: {type: String, required: true},
        userImageUrl: {type: String, required: true}
    }), required: true, default: []},
    // followersList - [{userId, userName, userImageUrl}]
    followersList: {type: Array({
        userId: {type: String, required: true},
        userName: {type: String, required: true},
        userImageUrl: {type: String, required: true}
    }), required: true, default: []},
    // ratingList - [{userId, value}]
    ratingList: {type: Array({
        userId: {type: String, required: true},
        value: {type: Number, required: true, max: 5}
    }), required: true, default: []}
});

// Plugin
mongoose.plugin(uniqueValidator);


// Model
module.exports = mongoose.model('User', userSchema);