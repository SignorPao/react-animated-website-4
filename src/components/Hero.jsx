import React from "react";

// icons
import { FaDatabase, FaServer, FaCloudUploadAlt } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";

// img
import heroImg from "../assets/cyber-bg.png";

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between"
    >
      <div className="w-full h-full pb-32 flex flex-col items-center mt-[100px] md:mt-0 md:pb-0 md:grid md:grid-cols-2 xl:max-w-[1024px] 2xl:max-w-[1240px] md:m-auto">
        {/* text */}
        <div className="flex flex-col justify-center items-center md:items-start w-full px-2 py-1 md:py-8 text-center md:text-left">
          <p className="text-2xl" data-aos="fade-right" data-aos-delay="200">
            Unique Sequencing & Production
          </p>
          <h1
            className="py-3 text-5xl lg:text-7xl font-bold"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            Cloud Management
          </h1>
          <p className="text-2xl" data-aos="fade-right" data-aos-delay="400">
            This is our Tech brand.
          </p>
          <button
            className="py-3 w-[60%] my-4"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            Get Started
          </button>
        </div>

        {/* img */}
        <div className="flex justify-center items-center">
          <img
            src={heroImg}
            alt="hero"
            className="object-contain h-[45vh] md:h-[100%] md:w-full"
            data-aos="zoom-in"
            data-aos-delay="100"
          />
        </div>

        {/* icons */}
        <div className="absolute flex flex-col py-1 md:py-4 md:min-w-[760px] bottom-[3%] lg:bottom-[6%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl">
          <p>Data Services</p>
          <div className="grid grid-cols-2 md:flex justify-start md:justify-between flex-wrap px-4">
            <p className="text-sm md:text-base flex px-4 py-2 text-slate-500">
              <FaCloudUploadAlt className="w-4 h-4 md:w-6 md:h-6 mr-2 text-indigo-600" />
              App Security
            </p>
            <p className="text-sm md:text-base flex px-4 py-2 text-slate-500">
              <FaServer className="w-4 h-4 md:w-6 md:h-6 mr-2 text-indigo-600" />
              Dashboard Design
            </p>
            <p className="text-sm md:text-base flex px-4 py-2 text-slate-500">
              <FaDatabase className="w-4 h-4 md:w-6 md:h-6 mr-2 text-indigo-600" />
              Cloud Data
            </p>
            <p className="text-sm md:text-base flex px-4 py-2 text-slate-500">
              <BsGearFill className="w-4 h-4 md:w-6 md:h-6 mr-2 text-indigo-600" />
              API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
