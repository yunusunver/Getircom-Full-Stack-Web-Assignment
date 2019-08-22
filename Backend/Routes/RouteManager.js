const taskRouter = require("../Routes/Task.route");

module.exports = (app) => {
    app.use("/",taskRouter);
};