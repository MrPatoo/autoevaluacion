import express from "express";
import tasksController from "../controllers/CtrlTasks.js";

const router = express.Router();

router.route("/")
.get(tasksController.getTasks)
.post(tasksController.postTasks)

router.route("/:id")
.put(tasksController.putTasks)
.delete(tasksController.deleteTasks)

export default router;
