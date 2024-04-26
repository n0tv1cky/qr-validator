import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginPage } from "./LoginPage";
import { Navigate } from "react-router-dom";

function Authenticator({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogin = (username, password) => {
    if (username === "admin" && password === "password") {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      navigate("/home");
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

export default Authenticator;
