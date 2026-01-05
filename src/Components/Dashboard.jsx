import React from "react";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-50 p-6">
          <h1 className="font-Source"> Dashboard</h1>
          <div className="w-full flex flex-row gap-10">
            <div className="bg-gray-200 rounded-2xl w-96 h-37 mt-10 ">
              <div className="flex flex-col gap-2 ml-[4%]">
                <span className="font-Source text-2xl mt-2">Total User</span>
                <p className="font-Source text-xl text-left">2,000,000,000</p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-2xl w-96 h-37 mt-10 ">
              <div className="flex flex-col gap-2 ml-[4%]">
                <span className="font-Source text-2xl mt-2">
                  Total items in inventory
                </span>
                <p className="font-Source text-xl text-left">2,000,000,000</p>
              </div>
            </div>
            <div></div>
          </div>
          <div className="w-full flex flex-row gap-8">
            <div className="bg-gray-200 rounded-2xl w-76 h-37 mt-10 ">
              <div className="flex flex-col gap-2 ml-[4%]">
                <span className="font-Source text-2xl mt-2">Total Cereal</span>
                <p className="font-Source text-xl text-left">2,000,000,000</p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-2xl w-76 h-37 mt-10 ">
              <div className="flex flex-col gap-2 ml-[4%]">
                <span className="font-Source text-2xl mt-2">Total Drinks</span>
                <p className="font-Source text-xl text-left">2,000,000,000</p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-2xl w-76 h-37 mt-10 ">
              <div className="flex flex-col gap-2 ml-[4%]">
                <span className="font-Source text-2xl mt-2">
                  Total Choco Bars
                </span>
                <p className="font-Source text-xl text-left">2,000,000,000</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row gap-8">
            <div className="bg-gray-200 rounded-2xl w-76 h-37 mt-10 ">
              <div className="flex flex-col gap-2 ml-[4%]">
                <span className="font-Source text-2xl mt-2">
                  Total Buscuits
                </span>
                <p className="font-Source text-xl text-left">2,000,000,000</p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-2xl w-76 h-37 mt-10 ">
              <div className="flex flex-col gap-2 ml-[4%]">
                <span className="font-Source text-2xl mt-2">Total Spreads</span>
                <p className="font-Source text-xl text-left">2,000,000,000</p>
              </div>
            </div>
            <div className="bg-gray-200 rounded-2xl w-76 h-37 mt-10 ">
              <div className="flex flex-col gap-2 ml-[4%]">
                <span className="font-Source text-2xl mt-2">Total Nuts</span>
                <p className="font-Source text-xl text-left">2,000,000,000</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
