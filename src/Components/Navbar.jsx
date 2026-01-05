import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Controls whether the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm overflow-hidden">
      <div className="flex h-16 items-center px-4 md:px-0">
        {/* LOGO – always visible */}
        <div className="ml-0 md:ml-20 mt-1">
          <img
            src="/images/Navbar .png"
            alt="Logo"
            className="w-14 h-14 object-cover rounded-full"
          />
        </div>

        {/* DESKTOP LINKS */}
        {/* Hidden on small screens, visible from md and up */}
        <div className="hidden md:flex w-1/2 items-center gap-4 ml-6">
          <Link to="/home" className="text-black">
            Welcome To
          </Link>
          <Link to="/additem" className="text-black">
            Add Items
          </Link>
          <Link to="/aboutus" className="text-black">
            About
          </Link>
          <Link to="/contactus" className="text-black">
            Contact
          </Link>
        </div>

        {/* DESKTOP LOGIN BUTTON */}
        {/* Hidden on mobile */}
        <div className="hidden md:flex w-1/4 items-center justify-end ml-auto mr-6">
          <Link
            to="/login"
            className="text-white rounded-3xl px-6 py-2 bg-red-600"
          >
            Login
          </Link>
        </div>

        {/* HAMBURGER BUTTON */}
        {/* Only visible on mobile */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {/* Appears only when isOpen === true */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4">
          <Link to="/home" className="block text-black font-Source">
            Welcome To
          </Link>
          <Link to="/additem" className="block text-black font-Source">
            Add Items
          </Link>
          <Link to="/aboutus" className="block text-black font-Source">
            About
          </Link>
          <Link to="/contactus" className="block text-black font-Source">
            Contact
          </Link>

          <Link
            to="/login"
            className="block text-center text-white rounded-3xl px-6 py-2 bg-red-600"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
