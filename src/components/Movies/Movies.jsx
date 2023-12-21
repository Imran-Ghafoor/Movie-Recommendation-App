import React from "react";
import MovieList from "../MovieList/MovieList";
import Pagination from "../Pagination/Pagination";

const Movies = () => {
  return (
    <section className="w-full h-auto border p-4 flex flex-col justify-center items-center">
      <MovieList />
      <Pagination />
    </section>
  );
};

export default Movies;
