const mongoose = require("mongoose");
const api = "mongodb://yunusunver:yunus1234@ds211648.mlab.com:11648/task-getircom";

const mongoDbConnectPromise = mongoose.connect(api,{useNewUrlParser:true});

mongoDbConnectPromise.then((res)=>{
    console.log("MongoDb connected: "+api);
});

mongoDbConnectPromise.catch((err)=>{
    console.log("MongoDb Failed: "+err);
});