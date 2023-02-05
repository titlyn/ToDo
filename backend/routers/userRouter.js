const express = require('express');
const userCtrl = require('../controllers/userCtrl');
const authMiddle = require('../middlewares/authMiddle');

// creation router
const router = express.Router();

// GET /api/users - user current // test done
router.get('/', authMiddle, userCtrl.getUserCurrent);

// GET /api/users/:id - user by id //test done
router.get('/:id', authMiddle, userCtrl.getUserById);

// export router
module.exports = router;