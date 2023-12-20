import React from "react";

const Movie = () => {
  return (
    <div className="border border-red-500 h-[350px] w-[250px] flex justify-center items-center flex-col text-white">
      <div className=" w-[200px] bg-cover">
        <img src="./poster.png" alt="poster" />
      </div>
      <h1 className="font-bold">title</h1>
    </div>
  );
};

export default Movie;
