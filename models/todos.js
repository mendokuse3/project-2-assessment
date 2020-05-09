const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name: String,
    done: Boolean
})

const ToDos = mongoose.model('toDo', todoSchema);

module.exports = ToDos;