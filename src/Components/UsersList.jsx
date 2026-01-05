import React from "react";
import Sidebar from "./Sidebar";
import { Search } from "lucide-react";
import UserCard from "./UserCard"; // Import our new component

const UsersList = () => {
  // These functions handle what happens when menu items are clicked
  const handleViewInventory = () => {
    console.log("View inventory clicked!");
    // Here you would add your actual logic, like:
    // navigate(`/inventory/${userId}`);
    // or setState to show inventory modal
    alert("Viewing inventory...");
  };

  const handleDeleteUser = () => {
    console.log("Delete user clicked!");
    // Here you would add your actual logic, like:
    // deleteUserFromDatabase(userId);
    // or show confirmation modal
    alert("Deleting user...");
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
        <span className="font-Source text-xl font-bold">Users</span>
        <hr className="mt-2" />

        <UserCard
          userName="Adeyemi Timilehin David"
          userEmail="Adeyemitimilehin@gmail.com"
          onViewInventory={handleViewInventory}
          onDeleteUser={handleDeleteUser}
        />

        <UserCard
          userName="Adeyemi Timilehin David"
          userEmail="Adeyemitimilehin@gmail.com"
          onViewInventory={handleViewInventory}
          onDeleteUser={handleDeleteUser}
        />

        <UserCard
          userName="Adeyemi Timilehin David"
          userEmail="Adeyemitimilehin@gmail.com"
          onViewInventory={handleViewInventory}
          onDeleteUser={handleDeleteUser}
        />
        <UserCard
          userName="Adeyemi Timilehin David"
          userEmail="Adeyemitimilehin@gmail.com"
          onViewInventory={handleViewInventory}
          onDeleteUser={handleDeleteUser}
        />
        <UserCard
          userName="Adeyemi Timilehin David"
          userEmail="Adeyemitimilehin@gmail.com"
          onViewInventory={handleViewInventory}
          onDeleteUser={handleDeleteUser}
        />
      </main>
    </>
  );
};

export default UsersList;
