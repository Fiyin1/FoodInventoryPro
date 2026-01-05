import React from "react";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <form
          className="max-w-md w-full"
          // onSubmit={(e) => {
          //   e.preventDefault();  stop page reload
          //   router.push("/home");
          // }}
        >
          <h1 className="font-Source text-3xl font-bold text-center mb-10">
            Log In
          </h1>
          <div className="block mb-4">
            <label htmlFor="email" className="block mb-2">
              Enter your email
            </label>
            <input
              className="rounded-4xl border border-black/50 px-2 py-1 w-full focus:outline-none focus:border-blue-500"
              type="text"
              name="email"
              id="email"
              placeholder="Adeyemitimilehin@gmail.com"
            />
          </div>
          <div className="block">
            <label htmlFor="password" className="block mb-2">
              Enter your Password
            </label>
            <input
              className="rounded-4xl border border-black/50 px-2 py-1 w-full focus:outline-none focus:border-blue-500"
              type="text"
              name="password"
              id="password"
              placeholder="........"
            />
          </div>
          <div className="mt-6 flex justify-center">
            <Link
              to="/dashboard"
              className="bg-red-600 text-white rounded-xl border border-gray-300 px-2 py-1 w-full text-center"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminLogin;
