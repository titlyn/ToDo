const express = require('express');
const userCtrl = require('../controllers/userCtrl');
const authMiddle = require('../middlewares/authMiddle');

// creation router
const router = express.Router();

// GET /api/users - user current
router.get('/',userCtrl.getUserCurrent);

// export router
module.exports = router;