// InventoryItem.jsx
import React from "react";
import { Trash } from "lucide-react";

const InventoryItem = ({
  itemName,
  expiryDate,
  category,
  itemCount,
  description,
  imageSrc,
  onDelete,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 lg:p-6 hover:shadow-md transition-shadow">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
        {/* Left section: Image and basic info */}
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <div className="rounded-xl w-full sm:w-32 h-32 lg:w-40 lg:h-32 flex-shrink-0">
            <img
              src={imageSrc}
              alt={itemName}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="font-Source font-semibold">
                <span className="text-gray-600">Item Name: </span>
                <span className="text-gray-900">{itemName}</span>
              </div>
              <div className="font-Source">
                <span className="text-gray-600">Expiry Date: </span>
                <span className="text-gray-900">{expiryDate}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle section: Category and description */}
        <div className="flex-1">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-3">
            <div className="font-Source">
              <span className="text-gray-600">Category: </span>
              <span className="text-gray-900 font-medium">{category}</span>
            </div>
            <div className="font-Source">
              <span className="text-gray-600">Count: </span>
              <span className="text-gray-900 font-medium">{itemCount}</span>
            </div>
          </div>
          <div className="text-gray-700 text-sm lg:text-base">
            <span className="text-gray-600 font-medium">Description: </span>
            {description}
          </div>
        </div>

        {/* Right section: Delete button */}
        <div className="flex justify-end lg:justify-center">
          <button
            onClick={onDelete}
            className="flex items-center gap-2 text-red-600 hover:text-red-800 hover:bg-red-50 px-3 lg:px-4 py-2 rounded-lg transition-colors border border-red-200"
          >
            <Trash className="w-4 h-4 lg:w-5 lg:h-5" />
            <span className="text-sm lg:text-base">Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryItem;
