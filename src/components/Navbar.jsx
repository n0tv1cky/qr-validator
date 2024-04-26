import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ onSignOut }) => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    onSignOut();
    navigate("/");
  };
  return (
    <>
      <div className="absolute top-3 right-3">
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </>
  );
};
