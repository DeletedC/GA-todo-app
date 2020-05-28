const express = require('express');
const mongoose = require('mongoose');

const todoController = express.Router();
const Todo = require('../models/todo.js');

const show = console.log;

////////////////
// ROUTES
////////////////

// === PRESENTATION ===

// INDEX ROUTE
todoController.get('/', (req, res) => {
    Todo.find({}, (error, list) => {
        if (error) {
            show(error);
        } else {
            res.render('Index', {todoList: list});
        }
    });
});


// EXPORT
module.exports = todoController;