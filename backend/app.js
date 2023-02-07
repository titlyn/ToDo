const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// import routes
const authRouter = require('./routers/authRouter');
const userRouter = require('./routers/userRouter'); 
const postRouter = require('./routers/postRouter');
const chatRouter = require('./routers/chatRouter');


// creation express app
const app = express();

// body parser
app.use(express.json());

// CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

// connection to database mongodb
mongoose.connect('mongodb://localhost:27017/ty-sy-nday-2023', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to database'))
    .catch(() => console.log('Connection failed'));

// routes
// TODO: add routes
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/post', postRouter);
app.use('/api/chat', chatRouter);

// multer
app.use('/images', express.static(path.join(__dirname + '/images')));

// export app
module.exports = app;