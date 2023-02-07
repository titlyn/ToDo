const Chat = require('../models/chatModel');

// GET /api/chat - all chat for userCurrent // test done
exports.getAllChatUserCurrent = (req, res, next) => {
    // TODO: Implement
    Chat.find({ "usersIdList.userId": req.auth._userId }) 
        .then(chatFound => res.status(200).json({
            message: "Chat found!",
            chat: chatFound 
        }))
        .catch(error => res.status(500).json({ error }));
}
// GET /api/chat/user/:id - get chat with an user // test done
exports.getChatUserById = (req, res, next) => {
    // TODO: Implement
    Chat.find({ "usersIdList.userId": req.auth._userId })
    .then(chatFound => {
        const chat = chatFound.find(chat => chat.usersIdList[0].userId == req.params.id || chat.usersIdList[1].userId == req.params.id);
        console.log(chat);
        res.status(200).json({ 
            message: "Chat found!",
            chat: chat
        })
    })
    .catch(error => res.status(500).json({ error }));
}
// POST /api/chat/create - create chat with an user // test done
exports.createChat = (req, res, next) => {
    // TODO: Implement
    // create chat
    const chat = new Chat({
        usersIdList: [
            { userId: req.auth._userId, userName: req.body.userNameCurrent },
            { userId: req.body.userId, userName: req.body.userName }
        ]
    })
    // save chat
    chat.save()
        .then((chatSaved) => res.status(201).json({
            message: "Chat created!",
            chat: chatSaved
        }))
        .catch(error => res.status(500).json({ error }))
}