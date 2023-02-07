const express = require('express');
const userCtrl = require('../controllers/userCtrl');
const authMiddle = require('../middlewares/authMiddle');
const multerMiddle = require('../middlewares/multer-config');
// creation router
const router = express.Router();

// GET /api/user - user current // test done
router.get('/', authMiddle, userCtrl.getUserCurrent);

// GET /api/user/:id - user by id //test done
router.get('/:id/profile', authMiddle, userCtrl.getUserById);

// PUT /api/user/:id - Modify user by id - subscribe to user or unsubscribe and follow or unfollow // test done
router.put('/:id', authMiddle, userCtrl.subscribeAndFollowUserToggel);

// PUT /api/user/:id/rating - Modify user by id - add rating // test done
router.put('/:id/rating', authMiddle, userCtrl.addRateUser);

// PUT /api/user - Modify user current
router.put('/profile', authMiddle, multerMiddle, userCtrl.modifyUserCurrent);

// export router
module.exports = router;