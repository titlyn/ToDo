const Post = require('../models/postModel');

// POST /api/post/create - create post // test done
exports.createPost = (req, res, next) => {
    // TODO: Implement
    // check if file exist // create new post
    const post = req.file ? {
        ...JSON.parse(req.body),
        postInfo: {
            photoImageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        }
    } : {
        ...req.body
    };
    const newPost = new Post({
        ...post
    })
    // save post
    newPost.save()
        .then(postSaved => res.status(201).json({
                message: 'Post created!',
                post: postSaved
            }))
        .catch(error => res.status(500).json({ error }))

};

// GET /api/post - all post in actuality
exports.getAllPostActuality = (req, res, next) => {
    // TODO: Implement
    
};

// GET /api/post/user - all post of userCurrent
exports.getAllPostUserCurrent = (req, res, next) => {
    // TODO: Implement
    Post.find({ "posterInfo.userId": req.auth._userId })
        .then(posts => res.status(200).json({
            message: 'posts found',
            posts: posts
        }))
        .catch(error => res.status(500).json({ error }));
};

// GET /api/post/user/:id - all post of an user
exports.getAllPostUserById = (req, res, next) => {
    // TODO: Implement
    Post.find({ "posterInfo.userId": req.params.id })
        .then(posts => res.status(200).json({
            message: 'posts found',
            posts: posts
        }))
        .catch(error => res.status(500).json({ error }));
};

// PUT /api/post - like a post of an user // test done
exports.likePost = (req, res, next) => {
    // TODO: Implement
    Post.findById(req.body.postId)
        .then(post => {
            // check if userCurrent liked the pot
            if (post.likesList.find(like => like.userId == req.body._userId)) {
                // dislike
                Post.updateOne({ "_id": req.body.postId }, { $pull: { "likesList": { userId: req.body._userId }}})
                    .then(() => res.status(201).json({ message: 'Post updated successfully!' }))
                    .catch(error => res.status(400).json({ error }));
            } else {
                // like   
                Post.updateOne({ "_id": req.body.postId }, { $push: { "likesList": { userId: req.body._userId }}})
                    .then(() => res.status(201).json({ message: 'Post updated successfully!' }))
                    .catch(error => res.status(400).json({ error }));
            }
        })
        .catch(error => res.status(400).json({ error }));
    
};

// PUT /api/post/comment - comment a post of an user
exports.commentPost = (req, res, next) => {
    // TODO: Implement
    Post.updateOne({ "_id": req.body.postId }, {
        $push : {
            "postComment": {
                userId: req.auth._userId,
                ...req.body.comment
            }
        }
    })
        .then(() => res.status(200).json({ message: 'Post commented successfully!' }))
        .catch(error => res.status(500).json({ error }));
};
