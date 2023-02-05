const express = require('express');
const mongoose = require('mongoose');

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
mongoose.connect('mongodb://localhost:27017/mean', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to database'))
    .catch(() => console.log('Connection failed'));

// routes
// TODO: add routes


// export app
module.exports = app;