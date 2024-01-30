const mongoose = require('mongoose'); 

const taskModel = new mongoose.Schema({
    description: String,
    completed: { type: Boolean, default: false },
    duration: { type: Number, default: 0}
})

const Task = mongoose.model('task', taskModel)

exports.task = Task;