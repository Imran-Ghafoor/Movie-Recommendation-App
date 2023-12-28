import React from "react";
import Movie from "../Movie/Movie";

const MovieList = ({ movies }) => {
  return (
    <div className=" p-1 my-2 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 h-auto ">
      {movies?.results?.map((movie, index) => (
        <Movie key={index} movie={movie} index={index} />
      ))}
    </div>
  );
};

export default MovieList;
