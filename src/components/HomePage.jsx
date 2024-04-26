import React from "react";
import { Navbar } from "./Navbar";
import { Scanner } from "./Scanner";

export const HomePage = ({ onSignOut }) => {
  return (
    <>
      <div className="flex justify-center">
        <Navbar onSignOut={onSignOut} />
      </div>
      <div className="p-5">
        {/* <h2>Welcome to the Home Page</h2>
        <p>This is a protected page. Only authenticated users can access it.</p> */}
        <Scanner />
      </div>
    </>
  );
};
