import React from "react";

// icons
import { HiOutlineCheck } from "react-icons/hi";

const Pricing = () => {
  return (
    <div name="pricing" className="w-full text-white mt-24 mb-12">
      {/* bg */}
      <div className="w-full h-[550px] 2xl:h-[700px] bg-slate-900 absolute mix-blend-overlay" />

      {/* content */}
      <div className="px-4 max-w-[1024px] 2xl:max-w-[1240px] mx-auto py-4 2xl:py-12">
        {/* top content */}
        <div className="text-center py-8 text-slate-300">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="text-5xl text-white font-bold py-8">
            The right price for your research.
          </h3>
          <p className="text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            mollitia est soluta asperiores sit? Facilis vitae eius provident
            minus distinctio!
          </p>
        </div>

        {/* cards */}
        <div className="grid md:grid-cols-2">
          {/* card 1 */}
          <div className="bg-white text-slate-900 m-4 p-4 2xl:p-8 rounded-xl shadow-2xl">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm relative">
              Standard
            </span>

            <div>
              <p className="text-6xl font-bold py-4 flex">
                $49
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-lg 2xl:text-2xl py-2 2xl:py-8 text-slate-500">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="text-lg 2xl:text-2xl">
              <p className="flex py-2 2xl:py-4">
                <HiOutlineCheck className="w-4 2xl:w-7 mr-4 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-2 2xl:py-4">
                <HiOutlineCheck className="w-4 2xl:w-7 mr-4 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-2 2xl:py-4">
                <HiOutlineCheck className="w-4 2xl:w-7 mr-4 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-2 2xl:py-4">
                <HiOutlineCheck className="w-4 2xl:w-7 mr-4 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-2 2xl:py-4">
                <HiOutlineCheck className="w-4 2xl:w-7 mr-4 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <button className="w-full py-3 2xl:py-4 my-4">Get Started</button>
            </div>
          </div>

          {/* card 2 */}
          <div className="bg-white text-slate-900 m-4 p-4 2xl:p-8 rounded-xl shadow-2xl">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm relative">
              Premium
            </span>

            <div>
              <p className="text-6xl font-bold py-4 flex">
                $99
                <span className="text-xl text-slate-500 flex flex-col justify-end">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-lg 2xl:text-2xl py-2 2xl:py-8 text-slate-500">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="text-lg 2xl:text-2xl">
              <p className="flex py-2 2xl:py-4">
                <HiOutlineCheck className="w-4 2xl:w-7 mr-4 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-2 2xl:py-4">
                <HiOutlineCheck className="w-4 2xl:w-7 mr-4 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-2 2xl:py-4">
                <HiOutlineCheck className="w-4 2xl:w-7 mr-4 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-2 2xl:py-4">
                <HiOutlineCheck className="w-4 2xl:w-7 mr-4 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-2 2xl:py-4">
                <HiOutlineCheck className="w-4 2xl:w-7 mr-4 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <button className="w-full py-3 2xl:py-4 my-4">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
