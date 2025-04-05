// src/Login.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // You can add validation/auth API here
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 relative">
      <div className="absolute inset-0 bg-[url('/imge.jpg')] opacity-10 bg-cover bg-center"></div>

      <div className="bg-white shadow-lg rounded-lg p-8 z-10 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Login to Invest-Ease</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="text"
              name="user"
              id="user"
              placeholder="Email or Username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="pass"
              id="pass"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            LOGIN
          </button>

          <p className="text-center text-gray-500 mt-4">Or Login Using</p>

          <div className="flex justify-between mt-4 space-x-2">
            <button
              type="button"
              className="flex-1 bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900"
            >
              Facebook
            </button>
            <button
              type="button"
              className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
            >
              Google
            </button>
          </div>

          <p className="text-center mt-6 text-sm text-gray-600">
            New User?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Create an Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
