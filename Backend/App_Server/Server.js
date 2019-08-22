const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

const dbServer = require("../Database/DbServer.js");

const cors = require("cors");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(cors());
require("../Routes/RouteManager")(app);

app.listen(8000,()=>{
    console.log('Server is listening at '+port);
});

module.exports = app;