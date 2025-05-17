const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

// import the connection we made with the database
const connectDB = require('./config/db');
connectDB();


// import the database model we created
const userModel = require('./models/user')
const taskModel = require('./models/task')


const app = express();

