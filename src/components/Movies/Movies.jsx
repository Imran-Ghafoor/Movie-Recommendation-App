import React from "react";
import MovieList from "../MovieList/MovieList";
import Pagination from "../Pagination/Pagination";

const Movies = () => {
  return (
    <section className="w-full h-auto border p-4">
      <MovieList />
      {/* <Pagination /> */}
    </section>
  );
};

export default Movies;
