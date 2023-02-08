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

console.log('Connexion au serveur');

// CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

// connection to database mongodb atlas
/*
mongoose.connect('mongodb+srv://herifanantenana:herifanantenana@cluster0.gi74axk.mongodb.net/tysynday?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to database'))
    .catch(() => console.log('Connection failed'));
*/
// Mise à jour à partir de la version 7 de mongoose, pour éviter les erreurs dans les données
mongoose.set('strictQuery', true);

// connection to database mongodb compass
mongoose.connect('mongodb://localhost:27017/ty-sy-nday-2023', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to database'))
    .catch(() => console.log('Connection failed'));
    
// routes
// TODO: add routes
app.use('/api/auth', authRouter); // test done
app.use('/api/user', userRouter); // test done
app.use('/api/post', postRouter); // test done
app.use('/api/chat', chatRouter);

// multer
app.use('/images', express.static(path.join(__dirname + '/images')));

// export app
module.exports = app;