import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { LoginPage } from "./components/LoginPage";
import Authenticator from "./components/Authenticator";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

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

export default App;
