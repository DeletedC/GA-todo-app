////////////////////////
// DEPENDENCIES
////////////////////////

const express = require('express');
const app = express();

const methodOverride = require('method-override');
const mongoose = require('mongoose');
const db = mongoose.connection;
require('dotenv').config();

const todoController = require('./controllers/todo.js');

const PORT = process.env.PORT || 3000;
const show = console.log;

///////////////////
// VIEW ENGINE
///////////////////

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

////////////////////
// DATABASE
////////////////////

//Connecting Mongo to Heroku or local storage
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/project2-assessment';
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology:true});

// Mongo Error / success
db.on('error', (error) => show(error.message));
db.on('connected', () => show('Mongo is now connected.'));
db.on('disconnected', () => show('Mongo disconnected.'));
db.on('close', () => show('Mongo connection is now closed.'))

////////////////////
// MIDDLEWARE
////////////////////

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use('/todo', todoController);

///////////////
// ROUTES
///////////////

app.get('/', (req, res) => {
    res.redirect('/todo');
});

////////////////
// LISTENER
////////////////

app.listen(PORT, () => {
    show(`Listening on port: ${PORT}`);
});