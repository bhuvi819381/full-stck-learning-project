import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3000/api'
})

export const getTodos = () => API.get('/todos');
export const createTodo = (todo) => API.post('/todos', todo);

export const updateTodo = (id, updatedData) =>
  API.put(`/todos/${id}`, updatedData);

export const deleteTodo = (id) => API.delete(`/todos/${id}`);
