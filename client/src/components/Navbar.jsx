import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const buttonStyle = (path) =>
    `px-4 py-2 border border-gray-600 rounded transition hover:bg-gray-400 ${
      location.pathname === path ? "bg-gray-100 font-semibold" : ""
    }`;

  return (
    <nav className="flex justify-between items-center bg-white shadow-md px-6 py-4 rounded-md mb-6 w-full position-sticky top-0">
      {/* Brand Name */}
      <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition">
        Skill Swap Platform
      </Link>

      {/* Navigation Buttons */}
      <div className="flex gap-3">
        <Link to="/login" className={buttonStyle("/login")}>
          Login
        </Link>
        <Link to="/signup" className={buttonStyle("/signup")}>
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
