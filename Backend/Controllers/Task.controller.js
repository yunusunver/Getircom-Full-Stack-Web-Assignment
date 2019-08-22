const TaskModel = require("../Models/Tasks.model");

module.exports.getAllTasks = (req,res) => {
    
    const getAll = TaskModel.find({});

    getAll.then((result)=>{
        res.json(result);
    });

    getAll.catch((err)=>{
        res.json({message: "Tasks not found",status:false});
    });
};


module.exports.postTask = (req,res) => {
    console.log("Post")
    const { 
        title, 
        description
    } = req.body;

    const newTaskModel = new TaskModel({
        title:title,
        description:description
    });

    newTaskModel.save(()=>{
        res.json(newTaskModel);
    });
};

module.exports.updateTask = (res,req) =>{
    const id = req.params.Id;
    const updated = {
        title:req.body.title,
        description:req.body.description
    };

    TaskModel.findOneAndUpdate({_id:id}, updated, (err,doc,result)=>{
        res.json(updated);
    });
};

module.exports.deleteTask = (req,res) => {
    const id = req.params.Id;
    const deleteTask = TaskModel.findOneAndDelete({_id:id});
    console.log(id,deleteTask);

    deleteTask.then((deleted) => {
        res.json(deleted);
    })

    deleteTask.catch((err) => {
        res.json({message:"Delete Failed",status:false})
    })
};

module.exports.getTaskById = (req, res) =>{
    const id = req.params.Id;
    const getByIdTask = TaskModel.findById(id);

    getByIdTask.then((findedTask) => {
        res.json(findedTask);
    });

    getByIdTask.catch((err) => {
        res.json({message:"Task not found!",message:false});
    });
};

