// UserCard.jsx
import React, { useState, useRef, useEffect } from "react";
import { MoreHorizontal, Eye, Trash2 } from "lucide-react";

// This is our REUSABLE component
const UserCard = ({ userName, userEmail, onViewInventory, onDeleteUser }) => {
  // STATE: Tracks if dropdown menu is open/closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // REF: Reference to the dropdown container (like a bookmark to find it in the DOM)
  const menuRef = useRef(null);

  // EFFECT: Handles clicking outside the dropdown
  // useEffect runs code after component renders
  useEffect(() => {
    // Function to check if click was outside our dropdown
    const handleClickOutside = (event) => {
      // menuRef.current = the actual DOM element
      // event.target = where the user clicked
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close the dropdown
      }
    };

    // Add click listener to entire document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function - runs when component is removed
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Empty array means run once when component loads

  // Function to handle menu item clicks
  const handleMenuItemClick = (action) => {
    setIsMenuOpen(false); // Close dropdown

    // Call the appropriate function passed from parent
    if (action === "view" && onViewInventory) {
      onViewInventory();
    } else if (action === "delete" && onDeleteUser) {
      onDeleteUser();
    }
  };

  return (
    <div className="relative">
      {/* Main card container */}
      <div className="flex items-center justify-between p-4 mt-4">
        {/* Left side - User info */}
        <div className="flex flex-col gap-2 flex-1">
          <span className="font-medium">Name: {userName}</span>
          <span className="font-medium">Email: {userEmail}</span>
        </div>

        {/* Right side - Dotted line and menu button */}
        <div className="flex items-center flex-1 justify-end">
          {/* Menu button with dropdown - ref attaches our reference */}
          <div className="relative" ref={menuRef}>
            {/* Three dots button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle open/close
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
              aria-label="Open menu"
            >
              <MoreHorizontal className="w-5 h-5 text-gray-600" />
            </button>

            {/* Dropdown menu - only shows when isMenuOpen is true */}
            {isMenuOpen && (
              <div className="absolute right-full top-0 mr-2 w-48 bg-white rounded-lg shadow-lg border z-50">
                <button
                  onClick={() => handleMenuItemClick("view")}
                  className="flex items-center w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100"
                >
                  <Eye className="w-4 h-4 mr-3 text-gray-600" />
                  <span>View Inventory</span>
                </button>
                <button
                  onClick={() => handleMenuItemClick("delete")}
                  className="flex items-center w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors text-red-600"
                >
                  <Trash2 className="w-4 h-4 mr-3" />
                  <span>Delete User</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr className="mt-2" />
    </div>
  );
};

export default UserCard;
