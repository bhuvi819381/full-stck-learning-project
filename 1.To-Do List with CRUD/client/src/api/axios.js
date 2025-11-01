import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export default api;

// export const getTodos = () => api.get('/todos');
// export const createTodo = (todo) => api.post('/todos', todo);

// export const updateTodo = (id, updatedData) =>
//   api.put(`/todos/${id}`, updatedData);

// export const deleteTodo = (id) => api.delete(`/todos/${id}`);
