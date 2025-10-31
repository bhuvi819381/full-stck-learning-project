import { useState } from "react";

export default function TaskList({ tasks, onDelete, onUpdate }) {
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const handleEditClick = (task) => {
    setEditId(task._id);
    setEditTitle(task.title);
  };

  const handleSave = (id) => {
    if (!editTitle.trim()) return;
    onUpdate(id, { title: editTitle });
    setEditId(null);
    setEditTitle("");
  };

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <li
          key={task._id}
          className="flex justify-between items-center bg-gray-800 p-4 rounded-2xl shadow-sm hover:shadow-lg transition"
        >
          {editId === task._id ? (
            <>
              <input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="flex-1 px-3 py-2 rounded-lg bg-gray-700 text-white mr-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                onClick={() => handleSave(task._id)}
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm"
              >
                Save
              </button>
              <button
                onClick={() => setEditId(null)}
                className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded-lg text-sm"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <span className="text-white">{task.title}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEditClick(task)}
                  className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(task._id)}
                  className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
