const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');


// import the routes we created
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();


// middleware
app.use(express.json());
app.use(cors());

// import the connection we made with the database
const connectDB = require('./config/db');
connectDB();

// use the routes
app.use('/api/auth', authRoutes); // for register and login
app.use('/api/tasks', taskRoutes); // for task management

// start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

