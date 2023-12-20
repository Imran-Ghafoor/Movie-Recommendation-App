import React from "react";
import Movie from "../Movie/Movie";
const MovieList = () => {
  return (
    <div className="border border-purple-500 h-full p-1 grid gap-4 grid-cols-5 h-auto">
      {Array(20)
        .fill(true)
        .map((item, index) => {
          return <Movie />;
        })}
    </div>
  );
};

export default MovieList;
