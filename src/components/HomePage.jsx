import React from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = ({ onSignOut }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    onSignOut();
    navigate("/");
  };

  return (
    <>
      <div>
        <h2>Welcome to the Home Page</h2>
        <p>This is a protected page. Only authenticated users can access it.</p>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </>
  );
};
