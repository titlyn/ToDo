const User = require('../models/userModel');

// GET /api/users - user current
exports.getUserCurrent = (req, res, next) => {
    // TODO: Implement 
    User.findById(req.body._userId)
        .then(user => {
            // check if user exists
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

// GET /api/users/:id - user by id 
exports.getUserById = (req, res, next) => {
    // TODO: Implement
    User.findById(req.params.id)
        .then(user => {
            // check if user exists
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

// PUT /api/users - Modify user current
exports.putUserCurrent = (req, res, next) => {
    // TODO: Implement
    
};


