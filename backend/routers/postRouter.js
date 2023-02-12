const express =require('express');
const postCtrl = require('../controllers/postCtrl');
const authMiddle = require('../middlewares/authMiddle');
const multerMiddle = require('../middlewares/multer-config');

// creation router
const router = express.Router();

// POST /api/post - create post // test done 
router.post('/create', authMiddle, multerMiddle, postCtrl.createPost);

// GET /api/post - all post in actuality
router.get('/', postCtrl.getAllPostActuality);

// GET /api/post/user - all post of userCurrent // test done //
router.get('/user', authMiddle, postCtrl.getAllPostUserCurrent);

// GET /api/post/user/:id - all post of an user // test done //
router.get('/user/:id', authMiddle, postCtrl.getAllPostUserById);

// PUT /api/post - like a post of an user // test done //
router.put('/', authMiddle, postCtrl.likePost);

// PUT /api/post/comment - comment a post of an user // test done //
router.put('/comment', authMiddle, postCtrl.commentPost);

// export router
module.exports = router;