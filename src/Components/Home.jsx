import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <h1 className="flex justify-center mt-10 font-bold text-5xl font-Source">
        How does FoodInventoryPro work?
      </h1>
      <section className="flex h-[70%] mb-20">
        <div className="w-1/2 px-16 mt-30">
          <h1 className="font-bold text-4xl text-left font-Source">
            Essential features for new users
          </h1>
          <p className="max-w-xl text-lg text-left font-Source mt-3">
            New users can start using FoodInventoryPro without technical
            knowledge. Go to our website, add items to your inventory, and
            easily manage your food storage.
          </p>
          <h3 className="mt-14 text-2xl text-left font-Source">
            Don’t Forget, Simple is better
          </h3>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img
            src="/images/Home 1.png"
            alt="features"
            className="w-auto h-auto object-cover"
          />
        </div>
      </section>
      <section className="flex h-[70%] bg-[#EEEEEE] mb-20">
        <div className="w-1/2 flex items-center justify-center">
          <img
            src="/images/Home 2.png"
            alt="features"
            className="w-auto h-auto object-cover"
          />
        </div>
        <div className="w-1/2 px-16 mt-30">
          <h1 className="font-bold text-4xl text-left font-Source">
            FoodInventoryPro and data management
          </h1>
          <p className="max-w-xl text-lg text-left font-Source mt-3">
            FoodInventoryPro ensures efficient food storage management. Its
            system is user-friendly, accessible, and reliable for all users. It
            revolutionizes the way food inventory is managed.
          </p>
          <button className="text-center text-white rounded-3xl px-6 py-2 bg-red-600 mt-4 mb-4 md:mb-6">
            Start Managing Food
          </button>
        </div>
      </section>
      <section className="flex h-[70%] mb-20">
        <div className="w-1/2 px-16 mt-30">
          <h1 className="font-bold text-4xl text-left font-Source">
            Optimize your food inventory process
          </h1>
          <p className="max-w-xl text-lg text-left font-Source mt-3">
            FoodInventoryPro transforms food inventory processes, providing
            insights for better decision-making and value creation for users.
          </p>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img
            src="/images/Home 3.png"
            alt="features"
            className="w-auto h-auto object-cover"
          />
        </div>
      </section>
      <section className="flex bg-[#EEEEEE] ">
        <div className="w-1/2 flex-col items-center justify-center">
          <img
            src="/images/Home 4.png"
            alt="features"
            className="block w-auto h-auto object-cover"
          />
          <div className="block mx-10 mb-10">
            <h2 className="mt-14  text-3xl font-bold font-Source">
              Food Inventory
            </h2>
            <p>Your go-to platform for managing food inventory with ease.</p>
          </div>
        </div>
        <div className="w-1/2 px-16 mt-30">
          <h1 className="font-bold text-4xl text-left font-Source">
            Efficient and smart transactions
          </h1>
          <p className="max-w-xl text-lg text-left font-Source mt-3">
            Explore how FoodInventoryPro's technology streamlines data into
            actionable insights, enhancing efficiency in food inventory
            management.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
