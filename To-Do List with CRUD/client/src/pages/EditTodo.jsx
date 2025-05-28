import { useEffect, useState } from 'react';
import { getTodos, updateTodo } from '../api';

function EditTodo() {
  const [todos, setTodos] = useState([]);
  const [selectedId, setSelectedId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchTodos() {
      const res = await getTodos();
      setTodos(res.data);
    }

    fetchTodos();
  }, []);

  const handleSelect = (e) => {
    const todo = todos.find((t) => t._id === e.target.value);
    setSelectedId(todo._id);
    setTitle(todo.title);
    setDescription(todo.description);
    setCompleted(todo.completed);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateTodo(selectedId, { title, description, completed });
      setMessage('Todo updated!');
    } catch (error) {
      console.error(error);
      setMessage('Error updating todo');
    }
  };

  return (
    <div>
      <h2>Edit Todo</h2>

      <select onChange={handleSelect} defaultValue="">
        <option value="" disabled>Select a todo</option>
        {todos.map((todo) => (
          <option key={todo._id} value={todo._id}>
            {todo.title}
          </option>
        ))}
      </select>

      {selectedId && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label><br />
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Description:</label><br />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={completed}
                onChange={(e) => setCompleted(e.target.checked)}
              />
              Completed
            </label>
          </div>

          <button type="submit">Update Todo</button>
        </form>
      )}

      {message && <p>{message}</p>}
    </div>
  );
}

export default EditTodo;
