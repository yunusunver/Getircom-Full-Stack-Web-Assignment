const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    title: {type:String},
    description: { type:String},
    createdDate: { type:Date,default:Date.now},
    completeStatus: {type:Boolean}
});

module.exports = mongoose.model("Task",taskSchema);