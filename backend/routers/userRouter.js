const express = require('express');
const userCtrl = require('../controllers/userCtrl');
const authMiddle = require('../middlewares/authMiddle');
const multerMiddle = require('../middlewares/multer-config');
// creation router
const router = express.Router();

// GET /api/users - user current // test done
router.get('/', authMiddle, userCtrl.getUserCurrent);

// GET /api/users/:id - user by id //test done
router.get('/:id/profile', authMiddle, userCtrl.getUserById);

// PUT /api/users - Modify user current
router.put('/profile', authMiddle, multerMiddle, userCtrl.modifyUserCurrent);

// PUT /api/users/:id - Modify user by id - subscribe to user or unsubscribe and follow or unfollow
router.put('/:id', userCtrl.subscribeAndFollowUserToggel);

// export router
module.exports = router;