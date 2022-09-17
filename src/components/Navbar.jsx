import React, { useState } from "react";

// react scroll
import { Link, animateScroll as scroll } from "react-scroll";

// icons
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [mobMenu, setMobMenu] = useState(false);

  const handleClick = () => setMobMenu(!mobMenu);

  const handleClose = () => setMobMenu(!mobMenu);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>
          <ul className="hidden lg:flex">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-indigo-600 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                offset={-100}
                duration={500}
                className="cursor-pointer hover:text-indigo-600 transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="support"
                smooth={true}
                offset={-30}
                duration={500}
                className="cursor-pointer hover:text-indigo-600 transition"
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                to="platforms"
                smooth={true}
                offset={-100}
                duration={500}
                className="cursor-pointer hover:text-indigo-600 transition"
              >
                Platforms
              </Link>
            </li>
            <li>
              <Link
                to="pricing"
                smooth={true}
                offset={-40}
                duration={500}
                className="cursor-pointer hover:text-indigo-600 transition"
              >
                Pricing
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>

        <div className="lg:hidden mr-4 cursor-pointer" onClick={handleClick}>
          {!mobMenu ? (
            <FiMenu className="w-6 h-6" />
          ) : (
            <CgClose className="w-6 h-6" />
          )}
        </div>
      </div>

      {/* mobile menu */}
      <ul className={!mobMenu ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full py-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-indigo-600 transition"
            onClick={handleClose}
          >
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full py-4">
          <Link
            to="about"
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer hover:text-indigo-600 transition"
            onClick={handleClose}
          >
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full py-4">
          <Link
            to="support"
            smooth={true}
            offset={-30}
            duration={500}
            className="cursor-pointer hover:text-indigo-600 transition"
            onClick={handleClose}
          >
            Support
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full py-4">
          <Link
            to="platforms"
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer hover:text-indigo-600 transition"
            onClick={handleClose}
          >
            Platforms
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full py-4">
          <Link
            to="pricing"
            smooth={true}
            offset={-40}
            duration={500}
            className="cursor-pointer hover:text-indigo-600 transition"
            onClick={handleClose}
          >
            Pricing
          </Link>
        </li>

        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
