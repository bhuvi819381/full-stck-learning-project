import { useState } from 'react';
import { createTodo } from '../api';

function AddTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setMessage('Title is required');
      return;
    }

    try {
      const newTodo = { title, description };
      await createTodo(newTodo);
      setMessage('Todo created successfully!');
      setTitle('');
      setDescription('');
    } catch (err) {
      console.error(err);
      setMessage('Error creating todo');
    }
  };

  return (
    <div>
      <h2>Add New Todo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label><br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Description: </label><br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
          />
        </div>

        <button type="submit">Add Todo</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default AddTodo;
