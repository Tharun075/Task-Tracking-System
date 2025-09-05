const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    taskname:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    status:{
        type:String,
        enum:['incomplete','completed'],
        default:'incomplete',
    }
})

const Task = mongoose.model('Task',TaskSchema)

module.exports = Task

