import React, { useState, useRef, useEffect } from "react";
import { MoreHorizontal, Eye, Trash2 } from "lucide-react";

const UserCard = ({ userName, userEmail, onViewInventory, onDeleteUser }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuItemClick = (action) => {
    setIsMenuOpen(false);
    if (action === "view") onViewInventory?.();
    if (action === "delete") onDeleteUser?.();
  };

  return (
    <div className="group transition-colors hover:bg-gray-50">
      <div className="flex items-center justify-between p-4 gap-4">
        {/* User Info: truncate handles long text on small screens */}
        <div className="flex flex-col min-w-0 flex-1">
          <span className="font-semibold text-gray-900 truncate">
            {userName}
          </span>
          <span className="text-sm text-gray-500 truncate">{userEmail}</span>
        </div>

        {/* Action Menu */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full hover:bg-white transition-all border border-transparent hover:border-gray-200 active:scale-95"
          >
            <MoreHorizontal className="w-5 h-5 text-gray-500" />
          </button>

          {isMenuOpen && (
            /* 
               Changed from 'right-full' to 'right-0 top-12' 
               This ensures the menu drops DOWN and stays inside the container on mobile
            */
            <div className="absolute right-0 top-12 w-48 bg-white rounded-xl shadow-xl border border-gray-100 z-50 py-1 overflow-hidden animate-in fade-in zoom-in duration-100">
              <button
                onClick={() => handleMenuItemClick("view")}
                className="flex items-center w-full px-4 py-3 text-sm text-left hover:bg-gray-50 text-gray-700"
              >
                <Eye className="w-4 h-4 mr-3 text-gray-400" />
                View Inventory
              </button>
              <button
                onClick={() => handleMenuItemClick("delete")}
                className="flex items-center w-full px-4 py-3 text-sm text-left hover:bg-red-50 text-red-600 font-medium"
              >
                <Trash2 className="w-4 h-4 mr-3" />
                Delete User
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
