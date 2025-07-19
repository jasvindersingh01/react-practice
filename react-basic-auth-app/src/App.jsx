import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import SignupPage from "./pages/SignupPage";

function App() {
  return (

      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
        />
      </Routes>
  )
  
}

export default App