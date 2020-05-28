const express = require('express');
const mongoose = require('mongoose');

const todoController = express.Router();
const Todo = require('../models/todo.js');

const show = console.log;

////////////////
// ROUTES
////////////////

// === PRESENTATION ROUTES ===

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

// === FUNCTIONAL ROUTES ===

// CREATE ROUTE
todoController.post('/', (req, res) => {
    Todo.create(req.body, (error, newTodo) => {
        if (error) {
            show(error);
        } else {
            res.redirect('/');
        }
    });
});

// DELETE ROUTE
todoController.delete('/:id', (req, res) => {
    Todo.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            show(error);
        } else {
            res.redirect('/todo');
        }
    });
});

// EXPORT
module.exports = todoController;