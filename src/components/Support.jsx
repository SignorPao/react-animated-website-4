import React from "react";

// icons
import {
  HiOutlinePhone,
  HiArrowNarrowRight,
  HiOutlineSupport,
  HiOutlineGlobeAlt,
} from "react-icons/hi";

// img
import supportBg from "../assets/support.jpg";

const Support = () => {
  return (
    <div name="support" className="w-full mt-24">
      {/* bg */}
      <div className="w-full h-[800px] md:h-[550px] 2xl:h-[700px] bg-gray-900/90 absolute">
        <img
          src={supportBg}
          alt="support"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>

      {/* content */}
      <div className="max-w-[1024px] 2xl:max-w-[1240px] mx-auto text-white relative">
        {/* text */}
        <div className="px-4 py-4 2xl:py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            Support
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            Finding the right team
          </h3>
          <p className="py-4 text-3xl text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            velit dolorum facilis ullam dolor eos temporibus sequi vero
            doloremque voluptates.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-8 2xl:pt-20 text-black">
          {/* card 1 */}
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-4 2xl:p-8">
              <HiOutlinePhone className="w-16 h-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-3rem] 2xl:mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-3 2xl:my-6">Sales</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                quia repudiandae esse aspernatur deserunt similique provident
                alias modi dolorem laborum?
              </p>
            </div>
            <div className="bg-slate-100 pl-4 2xl:pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <HiArrowNarrowRight className="w-5 h-5 ml-2" />
              </p>
            </div>
          </div>

          {/* card 2 */}
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-4 2xl:p-8">
              <HiOutlineSupport className="w-16 h-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-3rem] 2xl:mt-[-4rem]" />
              <h3 className="font-bold text-2xl  my-3 2xl:my-6">Technical Support</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                quia repudiandae esse aspernatur deserunt similique provident
                alias modi dolorem laborum?
              </p>
            </div>
            <div className="bg-slate-100 pl-4 2xl:pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <HiArrowNarrowRight className="w-5 h-5 ml-2" />
              </p>
            </div>
          </div>

          {/* card 3 */}
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-4 2xl:p-8">
              <HiOutlineGlobeAlt className="w-16 h-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-3rem] 2xl:mt-[-4rem]" />
              <h3 className="font-bold text-2xl  my-3 2xl:my-6">Media Injuries</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                quia repudiandae esse aspernatur deserunt similique provident
                alias modi dolorem laborum?
              </p>
            </div>
            <div className="bg-slate-100 pl-4 2xl:pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <HiArrowNarrowRight className="w-5 h-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
