import { LayoutDashboard, LogOut, UserPlus, Users } from "lucide-react";
import React from "react";
import { NavLink, Link } from "react-router-dom";

const Sidebar = () => {
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded-md whitespace-nowrap transition
     ${
       isActive ? "bg-gray-700 text-white" : "text-gray-900 hover:bg-gray-500"
     }`;

  return (
    <div className="h-screen w-50 flex flex-col bg-gray-200 fixed">
      <ul className="mt-20 mx-2 space-y-4">
        <NavLink to="/dashboard" className={linkClasses}>
          <LayoutDashboard className="w-5 h-5" />
          <span className="font-Source">Dashboard</span>
        </NavLink>

        <NavLink to="/userslist" className={linkClasses}>
          <Users className="w-5 h-5" />
          <span className="font-Source">View Users</span>
        </NavLink>

        <NavLink to="/adduser" className={linkClasses}>
          <UserPlus className="w-5 h-5" />
          <span className="font-Source">Add User</span>
        </NavLink>

        {/* Logout intentionally NOT highlighted */}
        <Link
          to="/adminlogin"
          className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-900 hover:bg-gray-500"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-Source">Logout</span>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
