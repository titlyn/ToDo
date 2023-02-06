const mongoose = require('mongoose');

// Schema
const chatSchema = mongoose.Schema({
    // usersIdList - [{userId, userName}]
    usersIdList : {type: Array({
        userId: {type: String, required: true},
        userName: {type: String, required: true}
    }), required: true},
    // messagesList - [{userId, message, createdDate}]
    messagesList: {type: Array({
        userId: {type: String, required: true},
        message: {type: String, required: true},
        createdDate: {type: String, required: true, default: Date.now()}
    })}
});


// Model
module.exports = mongoose.model('Chat', chatSchema);