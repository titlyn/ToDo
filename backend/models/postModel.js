const mongoose = require('mongoose');


// Schema
const postSchema = new mongoose.Schema({
    // TODO: Add properties
    // posterInfo - userName, profileImageUrl
    posterInfo: {
        userId: {type: String, required: true},
        userName: {type: String, required: true},
        profileImageUrl: {type: String, required: true},
    },
    // postInfo - dateCreated, description, categorie, photoImageUrl
    postInfo: {
        dateCreated: {type: Date, required: true, default: Date.now()},
        description: {type: String, required: true},
        categorie: {type: String, required: true},
        photoImageUrl: {type: String, required: true}
    },
    // likesList - [{userId}]
    likesList: {type: Array({
        userId: {type: String, require: true},
    }), required: true, default: []},
    // postComment - [{userId, userName, userProfileImageUrl, commentContent, dateCreated}]
    postComment: {type: Array({
        userId: {type: String, required: true},
        userName: {type: String, required: true},
        userProfileImageUrl: {type: String, required: true},
        commentContent: {type: String, required: true},
        dateCreated: {type: Date, required: true, default: Date.non()}
    }), required: true, default: []}
});



// Model
module.exports = mongoose.model('Post', postSchema);