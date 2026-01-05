// InventoryItem.jsx
import React from "react";
import { Trash } from "lucide-react";

// Props are the data we pass TO this component
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
    <div className="inventory-item">
      {/* Main container */}
      <div className="flex items-center justify-between mt-2">
        {/* Left section: Image and basic info */}
        <div className="flex flex-col gap-4 flex-1">
          <div className="rounded-2xl w-[70%] h-[10vh]">
            <img
              src={imageSrc}
              alt={itemName}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <span className="font-Source">Item Name: {itemName}</span>
          <span className="font-Source">Item Expiry Date: {expiryDate}</span>
        </div>

        {/* Middle section: Category and description */}
        <div className="flex flex-col gap-6 max-w-[30vw] flex-1">
          <div className="flex gap-10">
            <span className="font-Source">Item Category: {category}</span>
            <span className="font-Source">
              No of Items in Category: {itemCount}
            </span>
          </div>
          <div>Item Description: {description}</div>
        </div>

        {/* Right section: Delete button with icon and text ON SAME LINE */}
        <div className="mx-2 flex-1 flex items-center justify-end">
          <button
            onClick={onDelete}
            className="flex items-center gap-2 text-red-600 hover:text-red-800 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors"
          >
            <Trash className="w-5 h-5" />
            <span>Delete Item</span>
          </button>
        </div>
      </div>
      <hr className="mt-2" />
    </div>
  );
};

export default InventoryItem;
