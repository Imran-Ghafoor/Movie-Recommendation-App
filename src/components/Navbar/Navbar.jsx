import React, { useState } from "react";
// import { FaSearchPlus } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import { searchMovie } from "../../Feature/currentGenre";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleKeyPress = () => {
    dispatch(searchMovie(query));
  };
  return (
    <div className="w-full px-7 py-5 bg-red-600 text-white flex justify-center items-center">
      <div className=" w-full max-w-[1700px] flex justify-between items-center ">
        <Link to="/" className="font-black text-3xl hover:text-green-600">
          MovieMars
        </Link>
        <div className=" relative hidden sm:block">
          <input
            type="text"
            placeholder="Enter a movie"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-dark-Gray p-3 text-light-Gray border-none outline-none rounded-lg w-[250px] text-sm placeholder:text-sm py-3 pl-4 pr-10"
          />
          <AiFillEye
            className="absolute right-3 top-[50%] -translate-y-[50%] cursor-pointer "
            onClick={handleKeyPress}
          />
        </div>
        <Link
          to="/genre"
          className="py-3 px-5 bg-dark-Gray hover:bg-green-600 rounded-lg text-sm"
        >
          Select Movie
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
