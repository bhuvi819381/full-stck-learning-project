import React, { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title });
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 mb-6 bg-gray-800 p-4 rounded-2xl shadow-md"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a new task..."
        className="flex-1 px-4 py-2 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl font-medium transition"
      >
        Add
      </button>
    </form>
  );
};

export default TaskForm;
