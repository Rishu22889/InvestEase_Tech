// // src/Signup.jsx
// import React from "react";
// import { Link } from "react-router-dom";

// export default function Signup() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-purple-300 relative">
//       <div className="absolute inset-0 bg-[url('/imge.jpg')] opacity-10 bg-cover bg-center"></div>

//       <div className="bg-white shadow-lg rounded-lg p-8 z-10 w-full max-w-md">
//         <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Create a New Account</h1>
//         <form>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Username"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition"
//           >
//             SIGN UP
//           </button>

//           <p className="text-center mt-6 text-sm text-gray-600">
//             Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }



// src/Signup.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful! You can now log in.");
      navigate("/login");
    } catch (err) {
      alert("Signup failed: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-200 relative">
      <div className="absolute inset-0 bg-[url('/imge.jpg')] opacity-10 bg-cover bg-center"></div>

      <div className="bg-white shadow-lg rounded-lg p-8 z-10 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h1>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="mb-4 w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="mb-4 w-full px-4 py-2 border rounded-lg"
          />
          <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
            SIGN UP
          </button>
        </form>
        <p className="text-center mt-6 text-sm text-gray-600">
          Already have an account? <Link to="/login" className="text-purple-600 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}
