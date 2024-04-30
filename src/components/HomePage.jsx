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
        <Scanner />
      </div>
    </>
  );
};
