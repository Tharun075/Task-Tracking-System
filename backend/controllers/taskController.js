const mongoose = require('mongoose')
const Task = require("../models/taskModel");

async function getAllTasks(req,res){
    try{
        const Tasks = await Task.find()
        res.status(201).json({msg:"All tasks fetched!",Tasks})
    }
    catch(err){
        res.status(500).json({msg:"Unable to fetch all tasks",error:err.message})
    }
}

async function createTask(req,res){
    const { taskname,status} = req.body
    
    if(!taskname){
        return res.status(400).json({msg:"Missing required parameter(s)!"})
    }
    try{
        const newTask= new Task({
            taskname:taskname,
            createdAt:Date.now(),
            status:status,
        })

        await newTask.save()
        res.status(200).json({msg:"Task created successfully!",newTask})
    }
    catch(err){
        res.status(500).json({msg:"Unable to create Task!", error:err.message})
    }
}

async function deleteTask(req,res){
    const { id } = req.params
    
    if(!id){
        return res.status(400).json({msg:"Missing OR Invalid id parameter!"})
    }

    try{
        const target = await Task.findByIdAndDelete(id)
        if(!target){
            return res.status(404).json({msg:"No such task in DB"})
        }
        res.status(200).json({msg:"Task deleted successfully",target})
    }
    catch(err){
        res.status(500).json({msg:"Internal server error",error:err.message})
    }
}

async function updateTask(req,res){
    const {id} = req.params
    const {status} = req.body
    
    if(!id || status === undefined){
        return res.status(400).json({msg:"Missing required parameters for update!"})
    }
    try{
        const target = await Task.findByIdAndUpdate(id, {status:status},{new:true})
        if(!target){
            return res.status(404).json({msg:"No such task in DB"})
        }
        res.status(200).json({msg:"Task status successfully updated!",target})
    }
    catch(err){
        res.status(500).json({msg:"Internal server error", error:err.message})
    }
}

module.exports = { getAllTasks,createTask,deleteTask,updateTask }