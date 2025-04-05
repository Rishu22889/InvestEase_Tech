
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "./firebase";
import { Eye, EyeOff } from "lucide-react";

export default function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.user.value;
    const password = e.target.pass.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
      navigate("/");
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setIsLoggedIn(true);
      navigate("/dashboard");
    } catch (err) {
      alert("Google login failed: " + err.message);
    }
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 relative">
      <div className="absolute inset-0 bg-[url('/imge.jpg')] opacity-10 bg-cover bg-center"></div>

      <div className="bg-white shadow-lg rounded-lg p-8 z-10 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Login to <br/>INVEST-EASE</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="user"
            placeholder="Email"
            required
            className="mb-4 w-full px-4 py-2 border rounded-lg"
          />

          {/* Password input with eye toggle */}
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              name="pass"
              placeholder="Password"
              required
              className="w-full px-4 py-2 border rounded-lg pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            LOGIN
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4 text-bold">Or Login Using</p>
        <div className="flex justify-between mt-4 space-x-2">
          {/* <button
            onClick={handleFacebook}
            className="flex-1 bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900"
          >
            Facebook
          </button> */}
          <button
            onClick={handleGoogle}
            className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
          >
            GOOGLE
          </button>
        </div>

        <p className="text-center mt-6 text-sm text-gray-600">
          New User?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Create an Account
          </Link>
        </p>
      </div>
    </div>
  );
}



// return(
//     <>
//     <div className="flex h-full w-200 bg-grey-500">Invest Ease</div>
//     <div className="h-screen">uh</div>
//     </>
// )
// }
