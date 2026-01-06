import {
  Box,
  LayoutDashboard,
  LogOut,
  UserPlus,
  Users,
  Menu,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
     ${
       isActive
         ? "bg-gray-800 text-white shadow-md"
         : "text-gray-700 hover:bg-gray-300"
     }`;

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-200 rounded-md shadow-md"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div
        className={`
        fixed top-0 left-0 h-screen bg-gray-200 z-40 transition-transform duration-300 ease-in-out
        w-64 lg:translate-x-0 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="p-6 pt-20 lg:pt-6">
          <nav className="space-y-2">
            <NavLink
              to="/dashboard"
              className={linkClasses}
              onClick={() => setIsOpen(false)}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span className="font-Source font-medium">Dashboard</span>
            </NavLink>

            <NavLink
              to="/userslist"
              className={linkClasses}
              onClick={() => setIsOpen(false)}
            >
              <Users className="w-5 h-5" />
              <span className="font-Source font-medium">View Users</span>
            </NavLink>

            <NavLink
              to="/adduser"
              className={linkClasses}
              onClick={() => setIsOpen(false)}
            >
              <UserPlus className="w-5 h-5" />
              <span className="font-Source font-medium">Add User</span>
            </NavLink>

            <NavLink
              to="/inventory"
              className={linkClasses}
              onClick={() => setIsOpen(false)}
            >
              <Box className="w-5 h-5" />
              <span className="font-Source font-medium">Inventory</span>
            </NavLink>

            <div className="pt-10">
              <Link
                to="/adminlogin"
                className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span className="font-Source font-medium">Logout</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
