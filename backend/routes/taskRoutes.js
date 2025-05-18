const express = require('express');
const { createTask, getTasks, updateTaskStatus } = require('../controllers/taskController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// admin-only route to create a task
router.post('/', protect, createTask);

// employee + admin route to get tasks
router.get('/', protect, getTasks);

// employee-only route to update task status
router.put('/:id', protect, updateTaskStatus);

module.exports = router;