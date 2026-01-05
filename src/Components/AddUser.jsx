import React from "react";
import Sidebar from "./Sidebar";

const AddUser = () => {
  return (
    <>
      <Sidebar />
      <main className="flex-1 ml-50 p-6">
        <div className="flex mb-10">
          <div className="w-1/2 mt-4">
            <span className="text-2xl font-bold font-Source">Add user</span>
            <form action="">
              <div className="flex flex-col gap-2 font-Source mt-4">
                <label htmlFor="name">Name</label>
                <input
                  className="rounded-4xl px-4 py-4 w-[80%] focus:outline-none focus:border-blue-500 bg-gray-100"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2 font-Source mt-4">
                <label htmlFor="email">Email</label>
                <input
                  className="rounded-4xl px-4 py-4 w-[80%] focus:outline-none focus:border-blue-500 bg-gray-100"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2 font-Source mt-4">
                <label htmlFor="message">Password</label>
                <input
                  className="rounded-4xl px-4 py-4 w-[80%] focus:outline-none focus:border-blue-500 bg-gray-100"
                  type="text"
                />
              </div>
              <div className="flex mt-6">
                <button className="bg-red-600 ml-auto mr-[20%] font-Source text-white rounded-2xl px-10 py-2 w-[20%]">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="w-1/2 flex items-center justify-center mt-20">
            <img
              src="/images/Adduser.png"
              alt="features"
              className="w-[384px] h-91 object-cover rounded-2xl"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default AddUser;
