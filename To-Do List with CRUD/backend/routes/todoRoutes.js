import express from "express";
import { createTodo, deleteTodo, getTodoById, getTodos, updateTodo } from "../controllers/todoController.js";

const router = express.Router();

// Create ToDo
router.post('/', createTodo);

// Get All ToDos
router.get('/', getTodos);

// Get Single ToDo by ID
router.get('/:id', getTodoById);

// Update ToDo
router.put('/:id', updateTodo);

// Delete ToDo
router.delete('/:id', deleteTodo);

export default router;