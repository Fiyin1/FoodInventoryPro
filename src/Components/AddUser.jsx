import React from "react";
import Sidebar from "./Sidebar";

const AddUser = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <main className="lg:ml-64 p-4 md:p-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Form Section */}
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
            <h1 className="text-2xl md:text-3xl font-bold font-Source mb-6 md:mb-8">
              Add User
            </h1>
            <form className="space-y-4 md:space-y-6">
              {/* Name Input */}
              <div className="flex flex-col gap-2 font-Source">
                <label
                  htmlFor="name"
                  className="text-sm md:text-base font-medium"
                >
                  Name
                </label>
                <input
                  className="rounded-3xl md:rounded-4xl px-4 py-3 md:py-4 w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-100 text-sm md:text-base"
                  type="text"
                  id="name"
                  placeholder="Enter user's name"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-2 font-Source">
                <label
                  htmlFor="email"
                  className="text-sm md:text-base font-medium"
                >
                  Email
                </label>
                <input
                  className="rounded-3xl md:rounded-4xl px-4 py-3 md:py-4 w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-100 text-sm md:text-base"
                  type="email"
                  id="email"
                  placeholder="Enter user's email"
                />
              </div>

              {/* Password Input */}
              <div className="flex flex-col gap-2 font-Source">
                <label
                  htmlFor="password"
                  className="text-sm md:text-base font-medium"
                >
                  Password
                </label>
                <input
                  className="rounded-3xl md:rounded-4xl px-4 py-3 md:py-4 w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-gray-100 text-sm md:text-base"
                  type="password"
                  id="password"
                  placeholder="Enter user's password"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 font-Source text-white rounded-2xl px-6 md:px-10 py-3 md:py-4 w-full md:w-auto min-w-[120px] text-sm md:text-base transition-colors duration-200"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>

          {/* Image Section */}
          <div className="w-full mt-[15%] lg:w-1/2 flex items-center justify-center lg:mt-20 order-first lg:order-last">
            <div className="relative w-full max-w-md">
              <img
                src="/images/Adduser.png"
                alt="Add user illustration"
                className="w-full h-auto object-cover rounded-2xl md:rounded-3xl shadow-lg"
              />
              {/* Optional decorative element */}
              <div className="absolute -bottom-4 -right-4 bg-red-100 w-16 h-16 md:w-20 md:h-20 rounded-full -z-10"></div>
              <div className="absolute -top-4 -left-4 bg-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-full -z-10"></div>
            </div>
          </div>
        </div>

        {/* Optional: Additional Information */}
        {/* <div className="mt-8 md:mt-12 p-4 md:p-6 bg-white rounded-2xl shadow-sm">
          <h2 className="text-lg md:text-xl font-bold font-Source mb-3 md:mb-4">
            User Permissions
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            New users will have basic permissions. You can customize their
            access level after creation from the user management panel.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-gray-100 text-gray-800 text-xs md:text-sm px-3 py-1 rounded-full">
              Read Access
            </span>
            <span className="bg-gray-100 text-gray-800 text-xs md:text-sm px-3 py-1 rounded-full">
              Basic Editing
            </span>
            <span className="bg-gray-100 text-gray-800 text-xs md:text-sm px-3 py-1 rounded-full">
              Limited Permissions
            </span>
          </div>
        </div> */}
      </main>
    </div>
  );
};

export default AddUser;
