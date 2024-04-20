import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Authenticator } from "./components/Authenticator";
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
      <div>
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

export default App;
