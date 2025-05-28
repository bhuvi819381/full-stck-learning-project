import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddTodo from './pages/AddTodo'
import EditTodo from './pages/EditTodo'


const App = () => {
  return (
    <Router>
      <nav className="bg-blue-900 text-white p-4 shadow">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">ToDo App</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/add" className="hover:underline">Add Todo</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddTodo />} />
          <Route path="/edit/:id" element={<EditTodo />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;