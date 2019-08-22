const express = require("express");
const router = express.Router();
const taskController = require("../Controllers/Task.controller");

router.get("/getAll",taskController.getAllTasks);
router.get("/getAll/:Id",taskController.getTaskById);
router.post("/addTask",taskController.postTask);
router.delete("/deleteTask/:Id",taskController.deleteTask);
router.put("/modifiedTask/:Id",taskController.updateTask);

module.exports = router;