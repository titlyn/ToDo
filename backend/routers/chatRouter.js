const express = require('express');
const chatCtrl = require('../controllers/chatCtrl');

// creation router
const router = express.Router();

// GET /api/chat - all chat for userCurrent
router.get('/', chatCtrl.getAllChatUserCurrent);

// GET /api/chat/user/:id - get chat with an user
router.get('/user/:id', chatCtrl.getChatUserById);

// POST /api/chat/create - create chat with an user
router.post('/create', chatCtrl.createChat)



// exports router
module.exports = router