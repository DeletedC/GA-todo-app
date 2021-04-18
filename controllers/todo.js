const express = require('express');
const mongoose = require('mongoose');

const todoController = express.Router();
const Todo = require('../models/todo.js');

const show = console.log;

////////////////////
// MIDDLEWARE
////////////////////

// Mongo connection checker
const dbChecker = function (req, res, next) {
    try {
        // If the database is NOT connected
        if (mongoose.connection.readyState == 0) {
            res.render('Index', {toDoList: 'noDatabase'});

        // If the database is CONNECTED
        } else {
            next();
        }
    } catch (error) {
        res.send(error);
    }
}

////////////////
// ROUTES
////////////////

// === PRESENTATION ROUTES ===

// // SAMPLE CODE FROM STUDENT TRACKER APP
// studentsController.get('/', async (req, res) => {
//     try {
//         // First, verify that the database is connected
//         if (mongoose.connection.readyState == 0) {
//             res.render('Index', {students: 'noDatabase'});
//         } else {
//             await Student.find({}, (error, allStudents) => {
//                 if (error) {
//                     show(error);
//                 } else {
//                     res.render('Index', {students: allStudents});
//                 }
//             });
//         }      
//     } catch (error) {
//         res.send(error);
//     }

// });



// INDEX ROUTE
todoController.get('/', dbChecker, (req, res) => {
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

