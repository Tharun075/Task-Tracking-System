const express = require('express')
const { getAllTasks, createTask, deleteTask, updateTask } = require('../controllers/taskController')
const TaskRouter = express.Router()

TaskRouter.get("/getAllTasks",getAllTasks)
TaskRouter.post("/createTask",createTask)
TaskRouter.delete("/deleteTask/:id",deleteTask)
TaskRouter.put("/updateTask/:id",updateTask)


module.exports = { TaskRouter }