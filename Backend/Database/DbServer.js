const mongoose = require("mongoose");
const api = "";

const mongoDbConnectPromise = mongoose.connect(api,{useNewUrlParser:true});

mongoDbConnectPromise.then((res)=>{
    console.log("MongoDb connected: "+api);
});

mongoDbConnectPromise.catch((err)=>{
    console.log("MongoDb Failed: "+err);
});