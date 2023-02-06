const Chat = require('../models/chatModel');

// GET /api/chat - all chat for userCurrent
exports.getAllChatUserCurrent = (req, res, next) => {
    // TODO: Implement
    Chat.find({ "usersIdList.userId": req.auth._userId, "usersIdList.userId": req.body.userId })
        .then(chatFound => res.status(200).json({
            message: "Chat found!",
            chat: chatFound 
        }))
        .catch(error => res.status(500).json({ error }));
}
// GET /api/chat/user/:id - get chat with an user
exports.getChatUserById = (req, res, next) => {
    // TODO: Implement
}
// POST /api/chat/create - create chat with an user
exports.createChat = (req, res, next) => {
    // TODO: Implement
}