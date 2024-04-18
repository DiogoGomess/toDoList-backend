const mongoose = require('mongoose'); 

const taskModel = new mongoose.Schema({
    title: String,
    type: String,
    completed: { type: Boolean, default: false },
    dueDate: String, 
    priority: String 
})

const Task = mongoose.model('task', taskModel)

exports.task = Task;