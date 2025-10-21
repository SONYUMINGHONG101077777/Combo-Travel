import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center bg-gray-400 px-4 md:px-10 py-4 relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <h1 className="font-poppins text-2xl md:text-3xl font-bold text-blue-600">
          CamboTravel
        </h1>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 text-lg font-semibold">
        {[
          { to: "/", label: "Home" },
          { to: "/sea", label: "Sea" },
          { to: "/mountion", label: "Mountion" },
          { to: "/tample", label: "Tample" },
          { to: "/about", label: "About" },
        ].map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className="relative group"
          >
            {item.label}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </div>

      {/* Right side (Search + Profile) */}
      <div className="hidden md:flex items-center gap-3">
        <input
          placeholder="Enter"
          className="text-lg px-2 py-1 rounded border border-gray-300 focus:outline-none"
        />
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-male-icon.png"
          className="w-10 h-10 rounded-full"
          alt="Profile"
        />
      </div>

      {/* Mobile Menu Button (hamburger icon) */}
      <button
        className="md:hidden flex flex-col justify-between w-8 h-6 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="block w-full h-[3px] bg-blue-600 rounded"></span>
        <span className="block w-full h-[3px] bg-blue-600 rounded"></span>
        <span className="block w-full h-[3px] bg-blue-600 rounded"></span>
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-300 flex flex-col items-center py-4 gap-4 md:hidden z-50">
          {[
            { to: "/", label: "Home" },
            { to: "/sea", label: "Sea" },
            { to: "/mountion", label: "Mountion" },
            { to: "/tample", label: "Tample" },
            { to: "/about", label: "About" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="text-lg font-medium hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex gap-2 items-center">
            <input
              placeholder="Enter"
              className="text-lg px-2 py-1 rounded border border-gray-300 focus:outline-none"
            />
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-male-icon.png"
              className="w-8 h-8 rounded-full"
              alt="Profile"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
