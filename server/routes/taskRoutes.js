import express from "express";
import { createTask, getAllTasks, updateTask, deleteTask} from "../controllers/taskController.js";

console.log("Task Routes Loaded");

const router = express.Router();

router.post("/tasks", createTask);

router.get("/tasks",getAllTasks);

router.put("/tasks/:id",updateTask);

router.delete("/tasks/:id",deleteTask);

export default router;

