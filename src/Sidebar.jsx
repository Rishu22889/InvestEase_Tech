
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

export default function Sidebar({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      navigate("/");
    } catch (err) {
      alert("Logout failed: " + err.message);
    }
  };

  return (
    <div className="p-6 mt-8">
      <h2 className="text-xl font-bold text-gray-700 mb-6">Invest-Ease</h2>
      <nav>
        <ul className="space-y-4">
          <li className="text-blue-600 font-medium">Main Dashboard</li>
          <li>
            <Link to="/" className="text-gray-600 hover:text-blue-800 hover:font-medium">Home</Link>
          </li>

          <li className="text-gray-600">Profile Settings</li>
          <li className="text-gray-600">Subscription</li>
          <li className="text-gray-600">Pricing Page</li>
          <li className="text-gray-600 mt-110">
            <button onClick={handleLogout} className="text-red-500 hover:text-blue-500">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}


