import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute';

import Projects from './pages/Project';
import Profile from './pages/Profile';
import DashboardOne from "./pages/DashboardOne";
import DashboardTwo from "./pages/DashboardTwo";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Login from "./pages/login";
import Signup from "./pages/signup";

const App = () => {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<ProtectedRoute><DashboardOne /></ProtectedRoute>} />
        <Route path="/analytics" element={ <ProtectedRoute><DashboardTwo /></ProtectedRoute>} />
        <Route path="/profile" element={ <ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/projects" element={ <ProtectedRoute><Projects /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

    </main>
  )
}

export default App
