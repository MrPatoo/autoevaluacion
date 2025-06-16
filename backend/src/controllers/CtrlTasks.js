const tasksController = {};

import tasksModel from "../models/Tasks.js"

//SELECT
tasksController.getTasks = async(req, res) =>{
    const tasks = await tasksModel.find();

    res.json(tasks)
}

//INSERT
tasksController.postTasks = async(req, res) =>{
    const{title, description, completed, isVerified } = req.body;
    const newTask = new tasksModel({title, description, completed, isVerified})
    await newTask.save()

    res.json({message: "Task saved"})
}

//DELETE
tasksController.deleteTasks= async(req,res) =>{
    await tasksModel.findByIdAndDelete(req.params.id)

    res.json({message: "Task deleted"})
}

//UPDATE
tasksController.putTasks = async(req, res)=>{
    const{title, description, completed, isVerified} = req.body;
    const updateTasks = await tasksModel.findByIdAndUpdate(req.params.id, {title, description, completed, isVerified}, {new: true})

    res.json({message: "Task updated successfully"})
}

export default tasksController;