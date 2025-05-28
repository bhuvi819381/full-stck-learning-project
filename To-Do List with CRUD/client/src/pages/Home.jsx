import { useEffect, useState } from 'react';
import { getTodos, deleteTodo } from '../api';
import { Link } from 'react-router-dom';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState('');

  const fetchTodos = async () => {
    try {
      const res = await getTodos();
      setTodos(res.data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this todo?')) return;
    try {
      await deleteTodo(id);
      setMessage('Todo deleted.');
      fetchTodos();
    } catch (err) {
      console.error(err);
      setMessage('Error deleting todo.');
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      {message && <p className="mb-4 text-green-600">{message}</p>}
      <h2 className="text-2xl font-bold mb-6">All Todos</h2>

      <ul className="space-y-4">
        {todos.map((todo) => (
          <li key={todo._id} className="bg-white shadow p-4 rounded-md flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">{todo.title}</h3>
              <p className="text-gray-600">{todo.description}</p>
              <p className="text-sm text-gray-400 mt-1">
                {todo.completed ? '✅ Completed' : '🕓 Incomplete'}
              </p>
            </div>
            <div className="space-x-2">
              <Link
                to={`/edit/${todo._id}`}
                className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(todo._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
