const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// POST /api/auth/signup - signup
exports.signup = (req, res, next) => {
    // TODO: Implement
    // hash password
    bcrypt.hash(req.body.loginInfo.password, 10)
        .then(hash => {
            // create new user
            const user = new User({
                loginInfo: {
                    email: req.body.loginInfo.email,
                    password: hash
                },
                personalInfo: {
                    ...req.body.personalInfo,
                },
            });
            console.log(user);
            // save user
            user.save()
                .then(result => res.status(201).json({
                        message: 'User created!',
                        result: result
                    }))
                .catch(err => res.status(500).json({
                        message: 'Invalid authentication credentials!'
                    }));
        });
};

// POST /api/auth/login - login
exports.login = (req, res, next) => {
    // TODO: Implement
    User.findO({ 'loginInfo.email': req.body.email })
        .then(user => {
            // check if user exists
            if (!user) {
                return res.status(401).json({
                    message: 'Auth failed'
                });
            }
            // compare password with hashed password
            bcrypt.compare(req.body.password, loginInfo.password)
                .then(result => {
                    // check if password is correct
                    if (!result) {
                        return res.status(401).json({
                            message: 'Auth failed'
                        });
                    }
                    res.status(200).json({
                        // create token
                        message: 'Auth successful',
                        token: jwt.sign(
                            {userId: user._id},
                            "TYSYNDAY",
                            {expiresIn: "24h"}
                        )
                    });
                })
                .catch(err => res.status(401).json({
                        message: 'Invalid authentication credentials!'
                    }));
        })
        .catch(err => res.status(401).json({
                message: 'Invalid authentication credentials!'
            }));
    }