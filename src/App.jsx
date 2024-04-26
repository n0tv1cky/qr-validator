import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { LoginPage } from "./components/LoginPage";
import { HomePage } from "./components/HomePage";
import { useNavigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check authentication state on page load
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="w-full">
        <Routes>
          <Route
            path="/"
            element={
              <Authenticator
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />
          <Route path="/home" element={<HomePage onSignOut={handleLogout} />} />
        </Routes>
      </div>
    </Router>
  );
}

function Authenticator({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogin = (username, password) => {
    // Hardcoded authentication, replace with actual authentication logic
    if (username === "admin" && password === "password") {
      localStorage.setItem("isLoggedIn", "true"); // Store authentication state
      setIsLoggedIn(true);
      navigate("/home"); // Redirect to home page after successful login
    } else {
      alert("Invalid username or password");
    }
  };

  return isLoggedIn ? (
    <Navigate to="/home" />
  ) : (
    <LoginPage onLogin={handleLogin} />
  );
}

export default App;
