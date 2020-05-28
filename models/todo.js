const {Schema, model} = require('mongoose');

const todoSchema = new Schema ({
    todo: {type: String, required: true},
    isComplete: {type: Boolean, default: false}
});

module.exports = model('todo', todoSchema);

