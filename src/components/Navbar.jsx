import React from "react";
import { useNavigate } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/24/solid";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/16/solid";

export const Navbar = ({ onSignOut }) => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    onSignOut();
    navigate("/");
  };
  const handleHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="w-full absolute top-3 flex justify-between px-3">
        <button
          className="flex gap-3 items-center justify-center"
          onClick={handleHome}
        >
          {" "}
          <PlusIcon className="h-5 w-5" />
          New scan
        </button>
        <button
          className="flex gap-3 items-center justify-center"
          onClick={handleSignOut}
        >
          {" "}
          <ArrowLeftStartOnRectangleIcon className="h-5 w-5" />
          Sign Out
        </button>
      </div>
    </>
  );
};
