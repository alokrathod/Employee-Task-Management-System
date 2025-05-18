const Task = require('../models/task');
const User = require('../models/user');

// admin creates a task
exports.createTask = async (req, res) => {
    const { title, description, date, category, assignedTo } = req.body;

    try {
        // check if assignedTo is a valid employee
        const user = await User.findById(assignedTo);
        if(!user || user.rrole !== 'employee') {
            return res.status(400).json({ message: 'Assigned user must be an employee' });
        }
        const task = new Task({
            title,
            description,
            date,
            category,
            assignedTo
        });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: 'server error' });
    }
};


// get all tasks (admin) or own tasks (employee)
exports.getTasks = async (req, res) => {
    try {
        const userId = req.user.userId;
        const role = req.user.role;

        let tasks;
        if (role === 'admin') {
            tasks = await Task.find();
        } else {
            tasks = await Task.find({ assignedTo: userId });
        }

        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'server error' });
    }
};


// employee updates a task
exports.updateTaskStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        const task = await Task.findById(id);
        if(!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        task.status = status;
        await task.save();
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: 'server error' });
    }
};

