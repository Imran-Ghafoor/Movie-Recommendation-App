import React from "react";
import Star from "../Star";
import { Link } from "react-router-dom";

const Movie = ({ movie, index }) => {
  return (
    <div className=" h-auto w-[250px] flex justify-start flex-col text-white items-center hover:shadow-light-blue">
      <Link to={`/movie/${movie?.id} `}>
        <div className=" w-[250px] rounded-2xl overflow-hidden">
          <img
            src={
              movie.poster_path
                ? `http://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "https://www.fillmurray.com/200/300"
            }
            alt={movie?.title}
            className="w-full"
          />
        </div>
      </Link>
      <h1 className="font-semibold mt-3 w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
        {movie?.title}
      </h1>
      <div className="mt-2">
        <Star starVote={movie?.vote_average} />
      </div>
    </div>
  );
};

export default Movie;
