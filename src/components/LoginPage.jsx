import React from "react";
import { useState } from "react";

export const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center w-full h-screen p-5">
          <div className="w-full max-w-xl">
            <h2 className="mb-6 text-2xl font-semibold text-center">Login</h2>
            <div className="mb-4">
              <label htmlFor="username" className="block text-black">
                Username:
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-input mt-1 block w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-black">
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input mt-1 block w-full"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
