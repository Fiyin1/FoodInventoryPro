// Inventory.jsx
import React from "react";
import Sidebar from "./Sidebar";
import { Search } from "lucide-react";
import InventoryItem from "./InventoryItem";

const Inventory = () => {
  const handleDeleteItem = (itemName) => {
    console.log(`Deleting ${itemName}...`);
    alert(`Are you sure you want to delete ${itemName}?`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <main className="lg:ml-64 p-4 lg:p-6">
        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <div className="relative font-Source flex items-center border border-black rounded-3xl mx-20 w-full lg:w-[45%] bg-[#eeeeee] px-4 py-3 lg:py-6">
            <input
              type="text"
              placeholder="Search Bar"
              className="w-full bg-transparent outline-none pr-8 text-sm lg:text-base"
            />
            <Search className="absolute right-4 w-4 h-4 lg:w-5 lg:h-5 text-gray-600 pointer-events-none" />
          </div>
        </div>

        {/* Header */}
        <div className="flex flex-row sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
          <h1 className="font-Source text-xl lg:text-2xl font-bold">Items</h1>
          <button className="bg-red-600 font-Source text-white text-base lg:text-lg rounded-full px-4 lg:px-6 py-2 lg:py-2 w-[30%] sm:w-auto">
            Date
          </button>
        </div>

        <hr className="mb-4 lg:mb-6" />

        {/* Inventory Items */}
        <div className="space-y-4 lg:space-y-6">
          <InventoryItem
            itemName="Golden Morn"
            expiryDate="12-24-2025"
            category="Cereal"
            itemCount={130}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            imageSrc="/images/About2.png"
            onDelete={() => handleDeleteItem("Golden Morn")}
          />

          <InventoryItem
            itemName="Golden Morn"
            expiryDate="12-24-2025"
            category="Cereal"
            itemCount={130}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            imageSrc="/images/About2.png"
            onDelete={() => handleDeleteItem("Golden Morn")}
          />

          <InventoryItem
            itemName="Golden Morn"
            expiryDate="12-24-2025"
            category="Cereal"
            itemCount={130}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            imageSrc="/images/About2.png"
            onDelete={() => handleDeleteItem("Golden Morn")}
          />
        </div>
      </main>
    </div>
  );
};

export default Inventory;
