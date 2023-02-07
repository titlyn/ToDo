const User = require('../models/userModel');

// GET /api/user - user current
exports.getUserCurrent = (req, res, next) => {
    // TODO: Implement 
    User.findById(req.body._userId)
        .then(user => {
            // check if user is not exists
            if (!user) return res.status(401).json({
                    message: 'User not found'
                });
            res.status(200).json({
                message: 'User found',
                user: user
            });
        })
        .catch(err => res.status(500).json({
            message: "Auth failed"
        }));
};

// GET /api/user/:id - user by id 
exports.getUserById = (req, res, next) => {
    // TODO: Implement
    User.findById( req.params.id )
        .then(user => {
            // check if user is not exists
            if (!user) return res.status(401).json({
                    message: 'User not found'
                });
            res.status(200).json({
                message: 'User found',
                user: user
            });
        })
        .catch(err => res.status(500).json({
            message: "Auth failed"
        }));
};

// PUT /api/user/:id - Modify user by id - subscribe to user or unsubscribe and follow or unfollow
exports.subscribeAndFollowUserToggel = (req, res, next) => {
    // TODO: Implement
    User.findById(req.params.id)
        .then(user => {
            // check if user is not exists
            if (!user) return res.status(401).json({
                    message: 'User not found'
                });
            // check if userCurrent is already a follower and => the user is already a subscription
            if (user.followersList.find( follower => follower.userId == req.auth._userId )) {
                // remove userCurrent in the list of followers of the user 
                User.updateOne({ "_id": req.params.id }, { $pull: { "followersList": {  userId: req.auth._userId }}})
                    .then(() => {
                        // and remove user in the list of subscriptions of the userCurrent
                        User.updateOne({ "_id": req.auth._userId }, { $pull: { "subscriptionsList": {  userId: req.params.id }}})
                            .then(() => res.status(201).json({ message: 'User updated successfully!' }))
                            .catch(error => res.status(400).json({ error }));
                    })
                    .catch(error => res.status(400).json({ error }));
            } else {
                // add userCurrent in the list of followers of the user 
                User.updateOne({ "_id": req.params.id }, { $push: { "followersList": { 
                    userId: req.auth._userId,
                    userName: req.body.userCurrentName,
                    userProfileImageUrl: req.body.userCurrentProfileImageUrl
                     }}})
                    .then(() => {
                        // and add user in the list of following of the userCurrent
                        User.updateOne({ "_id": req.body._userId }, { $push: { "subscriptionsList": {
                            userId: req.params.id,
                            userName: user.personalInfo.lastName + " " + user.personalInfo.firstName,
                            userProfileImageUrl: user.personalInfo.profileImageUrl
                        }}})
                            .then(() => res.status(201).json({ message: 'User updated successfully!' }))
                            .catch(error => res.status(400).json({ error }));
                    })
                    .catch(error => res.status(400).json({ error }));
            }
        })
        .catch(err => res.status(500).json({ message: "Auth failed" }));
};

// PUT /api/user/:id/rating - Modify user by id - add rating 
exports.addRateUser = (req, res, next) => {
    // TODO: Implement
    User.findById(req.params.id)
        .then(user => {
            // check if userCurrent did already rate the user
            if (user.ratingsList.find( rating => rating.userId == req.auth._userId )) {
                // update rating
                User.updateOne({ "_id": req.params.id, "ratingsList.userId": req.auth._userId }, { $set: { "ratingsList.$.rating": req.body.rating }})
                    .then(() => res.status(201).json({ message: 'User updated successfully!' }))
                    .catch(error => res.status(400).json({ error }));
            } else {
                // add rating
                User.updateOne({ "_id": req.params.id }, { $push: { "ratingsList": { 
                    userId: req.auth._userId,
                    rating: req.body.rating
                     }}})
                    .then(() => res.status(201).json({ message: 'User updated successfully!' }))
                    .catch(error => res.status(400).json({ error }));
            }
        })
        .catch(error => res.status(400).json({ error }));
};

// PUT /api/user - Modify user current - all info
exports.modifyUserCurrent = (req, res, next) => {
    // TODO: Implement
    // check if file exist
    const thing = req.file ? {
        ...JSON.parse(req.body),
        profileImageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : {
        ...req.body
    };
    // update user
    User.updateOne({ "_id": req.auth._userId }, { ...thing })
        .then(() => res.status(201).json({ message: 'User updated successfully!' }))
        .catch(error => res.status(400).json({ error }));
};