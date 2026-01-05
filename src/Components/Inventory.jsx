// Inventory.jsx
import React from "react";
import Sidebar from "./Sidebar";
import { Search } from "lucide-react";
import InventoryItem from "./InventoryItem"; // Import our new component

const Inventory = () => {
  // Handle delete button click
  const handleDeleteItem = (itemName) => {
    console.log(`Deleting ${itemName}...`);
    // Here you would add your actual delete logic
    // For example: deleteItemFromDatabase(itemId)
    alert(`Are you sure you want to delete ${itemName}?`);
  };

  return (
    <>
      <Sidebar />
      <main className="flex-1 ml-50 p-6">
        <div className="flex justify-center gap-2">
          <span className="font-Source flex flex-row gap-4 border border-black rounded-3xl w-[45%] bg-[#eeeeee] px-4 py-6">
            Search Bar
            <Search className="w-5 h-5 flex ml-auto" />
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-Source text-xl font-bold">Items</span>
          <button className="bg-red-600 font-Source text-white text-lg rounded-full px-6 py-2">
            Date
          </button>
        </div>
        <hr className="mt-2" />

        <InventoryItem
          itemName="Golden Morn"
          expiryDate="12-24-2025"
          category="Cereal"
          itemCount={130}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit.ipsum dolor sit amet consectetur adipisicing elit."
          imageSrc="/images/About2.png"
          onDelete={() => handleDeleteItem("Golden Morn")}
        />

        <InventoryItem
          itemName="Golden Morn"
          expiryDate="12-24-2025"
          category="Cereal"
          itemCount={130}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit.ipsum dolor sit amet consectetur adipisicing elit."
          imageSrc="/images/About2.png"
          onDelete={() => handleDeleteItem("Golden Morn")}
        />
        <InventoryItem
          itemName="Golden Morn"
          expiryDate="12-24-2025"
          category="Cereal"
          itemCount={130}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit.ipsum dolor sit amet consectetur adipisicing elit."
          imageSrc="/images/About2.png"
          onDelete={() => handleDeleteItem("Golden Morn")}
        />
      </main>
    </>
  );
};

export default Inventory;
