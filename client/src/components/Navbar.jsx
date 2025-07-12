// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// const Navbar = () => {
//   const location = useLocation();

//   const buttonStyle = (path) =>
//     `px-4 py-2 border border-gray-600 rounded transition hover:bg-gray-400 ${
//       location.pathname === path ? "bg-gray-100 font-semibold" : ""
//     }`;

//   return (
//     <nav className="flex fixed left-0 backdrop-blur-md z-50 justify-between items-center bg-white/30 shadow-md px-6 py-4 w-full top-0">
//       {/* Brand Name */}
//       <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition">
//         Skill Swap Platform
//       </Link>

//       {/* Navigation Buttons */}
//       <div className="flex gap-3">
//         <Link to="/login" className={buttonStyle("/login")}>
//           Login
//         </Link>
//         <Link to="/signup" className={buttonStyle("/signup")}>
//           Signup
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  const buttonStyle = (path) =>
    `px-4 py-2 border border-gray-600 rounded transition hover:bg-gray-400 ${
      location.pathname === path ? "bg-gray-100 font-semibold" : ""
    }`;

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="flex fixed left-0 backdrop-blur-md z-50 justify-between items-center bg-white/30 shadow-md px-6 py-4 w-full top-0">
      {/* Brand Name */}
      <Link
        to="/"
        className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition"
      >
        Skill Swap Platform
      </Link>

      {/* Navigation Buttons */}
      <div className="flex gap-3 items-center">
        {isLoggedIn ? (
          <>
            <span className="text-gray-700 text-sm">Hi, {username}</span>
            <button onClick={handleLogout} className={buttonStyle()}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className={buttonStyle("/login")}>
              Login
            </Link>
            <Link to="/signup" className={buttonStyle("/signup")}>
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
