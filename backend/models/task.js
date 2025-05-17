const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['active', 'newTask', 'completed', 'failed'],
        default: 'newTask'
    }
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;