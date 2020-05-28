const express = require('express');
const mongoose = require('mongoose');

const todoController = express.Router();
const todo = require('../models/todo.js');

const show = console.log;

////////////////
// ROUTES
////////////////

// === PRESENTATION ===

// INDEX ROUTE
todoController.get('/', (req, res) => {
    res.render('Index');
});


// EXPORT
module.exports = todoController;