import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section className="flex min-h-screen bg-[#EEEEEE]">
        <div className="w-1/2 px-16 flex flex-col justify-center">
          <h1 className="font-bold text-4xl text-left font-Source">
            Meet the team behind this magic
          </h1>
          <p className="max-w-xl text-lg text-left font-Source mt-3">
            We're passionate about revolutionizing food inventory management.
          </p>
        </div>

        <div className="w-1/2">
          <img
            src="/images/About1.png"
            alt="features"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <section className="flex flex-col min-h-screen">
        <div className="flex flex-col gap-2 items-center justify-center mt-14">
          <h1 className="text-4xl font-Source">Our Food Journey</h1>
          <p className="text-lg font-Source mt-3 text-center max-w-4xl">
            Founded by a group of food enthusiasts, our company has evolved into
            a leading provider of innovative solutions for managing food
            inventory effectively.
          </p>
        </div>

        <div className="mx-auto mt-10 rounded-2xl bg-gray-100 w-[90%] h-[60vh] flex items-center justify-center">
          <img
            src="/images/About2.png"
            alt="features"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </section>
      <section className="flex flex-col min-h-screen">
        <div className="flex flex-col gap-6 items-center justify-center mt-14">
          <h1 className="text-4xl font-Source">Our Team</h1>
          <img
            src="/images/About3.png"
            alt="features"
            className="w-51 h-49.25 object-cover rounded-2xl"
          />
        </div>
        <div className="flex mt-20">
          <div className="w-1/2 flex items-center justify-center">
            <img
              src="/images/About4.png"
              alt="features"
              className="w-51 h-49.25 object-cover rounded-2xl"
            />
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <img
              src="/images/About5.png"
              alt="features"
              className="w-51 h-49.25object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
