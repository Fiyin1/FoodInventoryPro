import React from "react";
import Sidebar from "./Sidebar";
import { Search } from "lucide-react";
import UserCard from "./UserCard";

const UsersList = () => {
  const handleViewInventory = () => alert("Viewing inventory...");
  const handleDeleteUser = () => alert("Deleting user...");

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      {/* ml-0 on mobile, lg:ml-64 to match sidebar width. pt-20 to clear mobile menu button */}
      <main className="flex-1 lg:ml-64 p-4 md:p-8 pt-20 lg:pt-10">
        {/* Search Bar: Full width on mobile, 60% on tablet, 45% on desktop */}
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

        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h1 className="font-Source text-2xl font-bold">Users</h1>
            <span className="text-sm text-gray-500">Total: 5</span>
          </div>
          <hr className="border-gray-200 mb-2" />

          {/* List of cards */}
          <div className="divide-y divide-gray-100">
            {[1, 2, 3, 4, 5].map((item) => (
              <UserCard
                key={item}
                userName="Adeyemi Timilehin David"
                userEmail="Adeyemitimilehin@gmail.com"
                onViewInventory={handleViewInventory}
                onDeleteUser={handleDeleteUser}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default UsersList;
