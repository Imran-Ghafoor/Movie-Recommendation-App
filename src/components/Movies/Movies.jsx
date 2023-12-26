import React from "react";
import MovieList from "../MovieList/MovieList";
import Pagination from "../Pagination/Pagination";
import { useGetMoviesQuery } from "../../services/Api";

const Movies = () => {
  const { data, isFetching, error } = useGetMoviesQuery();
  console.log(data);
  return (
    <section className="w-full h-auto border p-4 flex flex-col justify-center items-center">
      <MovieList movies={data} />
      <Pagination />
    </section>
  );
};

export default Movies;
