////////////////////////
// DEPENDENCIES
////////////////////////

const express = require('express');
const app = express();

const methodOverride = require('method-override');
const mongoose = require('mongoose');
const db = mongoose.connection;

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
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/project2_assessment';

// Mongo Error / success
db.on('error', (error) => show(error.message + ' is Mongod not running?'));
db.on('connected', () => show('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => show('mongo disconnected'));

////////////////////
// MIDDLEWARE
////////////////////

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));


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