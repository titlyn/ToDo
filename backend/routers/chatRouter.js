const express = require('express');
const chatCtrl = require('../controllers/chatCtrl');
const authMiddle = require('../middlewares/authMiddle');

// creation router
const router = express.Router();

// GET /api/chat - all chat for userCurrent
router.get('/', authMiddle, chatCtrl.getAllChatUserCurrent);

// GET /api/chat/user/:id - get chat with an user
router.get('/user/:id', authMiddle, chatCtrl.getChatUserById);

// POST /api/chat/create - create chat with an user // test dones
router.post('/create', chatCtrl.createChat);



// exports router
module.exports = router