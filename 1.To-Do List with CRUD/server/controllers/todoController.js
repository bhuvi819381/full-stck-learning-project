import Todo from "../models/Todo.js";

export const createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title) {
            return res.status(400).json({ message: "Title is required"});
        }

        const newTodo = await Todo.create({title, description});

        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find().sort({ createdAt: -1});

        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

export const getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);

        if (!todo) {
            return res.status(404).json({ message: "Todo not found"});
        }

        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

export const updateTodo = async (req, res) => {
    try {
        const { title, description, completed } = req.body;

       
        const todo = await Todo.findById(req.params.id);

        if (!todo) {
            return res.status(404).json({ message: "Todo not found"});
        }

        todo.title = title ?? todo.title;
        todo.description = description ?? todo.description;
       if (completed !== undefined) {
            todo.completed = completed;
        }

        const updateTodo = await todo.save();
        res.status(200).json(updateTodo)


    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}



export const deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id)

        if(!todo) {
            return res.status(404).json({ message: "Todo not Found" })
        }

        await Todo.deleteOne({_id: req.params.id});

        res.status(200).json({message: "Todo Deleted"})
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}