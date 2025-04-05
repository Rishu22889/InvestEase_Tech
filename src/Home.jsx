import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <header className="bg-white p-6 shadow">
        <h1 className="text-3xl font-bold text-black">Welcome to Invest-Ease</h1>
      </header>

      <nav className="flex justify-between items-center bg-gray-100 px-6 py-4 shadow">
        <div className="text-xl font-semibold text-gray-800">Invest-Ease</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/login" className="text-gray-600 hover:underline">Login</Link>
          </li>
          <li>
            <Link to="/signup" className="text-gray-600 hover:underline">Signup</Link>
          </li>
        </ul>
      </nav>

      <div className="flex flex-wrap p-8">
        <div className="w-full md:w-1/2 p-6">
          <h1 className="text-4xl font-bold mb-4">Everything you need in one place</h1>
          <p className="text-gray-700 mb-6">
          welcome to the platform for analyzing and tracking your finance. Start your finance journey with us today
          </p>
          <div className="flex space-x-4">
            <Link to="/login" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Get Started
            </Link>
            <Link to="/dashboard" className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900">
              View Dashboard
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src="/imge.jpg" alt="Crypto" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
}
