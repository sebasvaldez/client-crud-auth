import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/tasks" element={<h1>Tasks page</h1>} />
          <Route path="/add-task" element={<h1>New task</h1>} />
          <Route path="/tasks/:id" element={<h1>update task</h1>} />
          <Route path="/profile" element={<h1>profile</h1>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
