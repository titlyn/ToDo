const express = require('express');
const authCtrl = require('../controllers/authCtrl');

// creation router
const router = express.Router();

// POST /api/auth/signup 
router.post('/signup', authCtrl.signup);

// POST /api/auth/login
router.post('/login', authCtrl.login);

// export router
module.exports = router;