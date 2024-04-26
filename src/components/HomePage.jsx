import React from "react";
import { Navbar } from "./Navbar";
import { Scanner } from "./Scanner";

export const HomePage = ({ onSignOut }) => {
  return (
    <>
      <Navbar onSignOut={onSignOut} />
      <div className="p-5">
        {/* <h2>Welcome to the Home Page</h2>
        <p>This is a protected page. Only authenticated users can access it.</p> */}
        <Scanner />
      </div>
    </>
  );
};
