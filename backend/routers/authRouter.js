const express = require('express');
const authCtrl = require('../controllers/authCtrl');

// creation router
const router = express.Router();

// POST /api/auth/signup - signup // test done
router.post('/signup', authCtrl.signup);

// POST /api/auth/login - login // test done
router.post('/login', authCtrl.login);

// export router
module.exports = router;