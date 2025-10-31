import { useState, useEffect } from "react";
import api from "../api/axios";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTasks = async() => {
    try{
      setLoading(true);
      const {data} = await api.get("/todos");
      setTasks(data);
      setError(null)
    } catch (err) {
      console.error(err);
      setError("Failed to fetch tasks");
    } finally {
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    try{
      const {data} = await api.post("/todos", task);
      setTasks(prev => [data, ...prev]);
    } catch (err) {
      console.error(err);
      alert("Could not add task");
    }
  }

  const deleteTask = async (id) => {
    try {
      await api.delete(`/todos/${id}`);
      setTasks(prev => prev.filter(t => t._id !== id));
    } catch (err) {
      console.error(err);
      alert("Could not delete tasks");
    }
  }

  const updateTask = async (id, updatedData) => {
    try {
      const { data } = await api.put(`/todos/${id}`, updatedData);
      setTasks((prev) =>
        prev.map((t) => (t._id === id ? { ...t, ...data } : t))
      );
    } catch (err) {
      console.error(err);
      alert("Could not update task");
    }
  };


  if(loading) return <h3>Loading tasks...</h3>;
  if(error) return <h3 className="text-red-500">{error}</h3>

  return (
    <div className="w-3xl m-auto my-15">
      <h1 className="text-3xl font-bold text-center">Todo App</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />
    </div>
  );
}
