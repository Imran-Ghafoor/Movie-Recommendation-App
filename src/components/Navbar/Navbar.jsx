import React from "react";
import { FaSearchPlus } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full px-7 py-5 bg-light-blue text-white flex justify-center items-center">
      <div className=" w-full max-w-[1700px] flex justify-between items-center ">
        <Link to="/" className="font-black text-3xl">
          MovieMars
        </Link>
        <div className=" border border-purple-600 relative hidden sm:block">
          <input
            type="text"
            placeholder="Enter a movie"
            className="bg-dark-Gray p-3 text-light-Gray border-none outline-none rounded-lg w-[250px] text-sm placeholder:text-sm py-3 pl-4 pr-10"
          />
          <FaSearchPlus className="absolute right-3 top-[50%] -translate-y-[50%] " />
        </div>
        <Link to="/genre" className="py-3 px-5 bg-dark-Gray rounded-lg text-sm">
          Select Genre
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
