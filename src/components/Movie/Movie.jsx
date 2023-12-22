import React from "react";
import Star from "../Star";
import { Link } from "react-router-dom";

const Movie = () => {
  return (
    <div className=" border border-red-500 h-auto w-[250px] flex justify-start flex-col text-white items-center">
      <Link to="/MovieInformation">
        <div className=" w-[250px] rounded-2xl overflow-hidden">
          <img src="./poster.png" alt="poster" className="w-full" />
        </div>
      </Link>
      <h1 className="font-semibold mt-3 w-full border whitespace-nowrap overflow-hidden overflow-ellipsis">
        title title title title title title title title title
      </h1>
      <div className="mt-2">
        <Star />
      </div>
    </div>
  );
};

export default Movie;
