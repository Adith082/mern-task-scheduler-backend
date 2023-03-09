const express = require("express");
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controller/taskController");

const Task = require("../models/taskModel");

const router = express.Router();

// router.route("/").get(getTasks).post(createTask);
// router.route("/:id").get(getTask).delete(deleteTask).put(updateTask);
// another way to write the routes 

// but i prefer this way
router.post("/",createTask);
router.get("/",getTasks);
router.get("/:id",getTask);
router.delete("/:id",deleteTask);
router.put("/:id",updateTask); //put use korle form er shob entry dite hoy but patch use korle ta kora lagena jeta update korte chacchi oita update korelei enough
module.exports = router;