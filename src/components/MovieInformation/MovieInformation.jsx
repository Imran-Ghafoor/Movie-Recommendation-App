import React from "react";
import Star from "../Star";
import { AiOutlineStar } from "react-icons/ai";
import { GoTriangleRight } from "react-icons/go";
import { useParams } from "react-router-dom";
import { useGetMovieQuery } from "../../services/Api";
import { CiLocationArrow1 } from "react-icons/ci";
import { useState } from "react";

function Modal({ data, modalActive, modalClose }) {
  if (!modalActive) return null;

  return (
    <div
      onClick={() => modalClose()}
      className="fixed inset-0 grid place-content-center bg-black bg-opacity-50 backdrop-blur-lg"
    >
      {data?.videos?.results?.length > 0 && (
        <iframe
          autoPlay
          className="aspect-video h-[150px] sm:h-[250px] md:h-[350px] lg:h-[500px]"
          title="Trailer"
          src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
          allow="autoplay"
        />
      )}
    </div>
  );
}

const MovieInformation = (movie) => {
  const [modalActive, setModalActive] = useState(false);
  const { id } = useParams();
  console.log(id);

  const { data, isFetching, error } = useGetMovieQuery(id);
  console.log(data);
  return (
    <section
      className="  w-full flex flex-col justify-center items-center max-w-[1700px] 
     lg:flex-row lg:items-start "
    >
      <div className=" border  w-full flex flex-col justify-center items-center lg:w-1/2">
        <div className=" w-1/2 my-5 shadow-lg shadow-light-blue rounded-2xl overflow-hidden">
          <img
            src={
              data?.poster_path
                ? `http://image.tmdb.org/t/p/w500/${data?.poster_path}`
                : "https://www.fillmurray.com/200/300"
            }
            alt="poster"
            className="w-full"
          />
        </div>
      </div>
      <div className="  w-full  flex flex-col justify-start items-center text-white p-5 lg:w-1/2">
        {/* info all */}
        <div className="w-[70%]">
          <div className="border text-center w-full">
            <h1 className="font-black text-4xl ">{data?.title}</h1>
            <p className="text-sm mt-2">{data?.tagline}</p>
          </div>
          <div className="border w-full flex flex-col justify-center items-center mt-3 lg:justify-between lg:flex-row ">
            <Star className="text-yellow-500" starVote={movie?.vote_average} />
            <p className="">
              {data?.runtime} min / {data?.release_date} /{" "}
              {data?.original_language}{" "}
            </p>
          </div>

          {/* Genres  */}

          <div className="border mt-3 w-full">
            <h1 className="font-bold mb-3">Genre:</h1>
            <div className=" gap-4 flex uppercase">
              <button className="px-4 py-2 uppercase border-[1px] flex justify-center  items-center gap-2 rounded-lg bg-light-blue">
                {data?.genres.map((genre, index) => (
                  <p
                    key={index}
                    className="mb-4 mr-4 flex items-center justify-center rounded-lg bg-[#227fb4] px-3 py-2 text-sm"
                  >
                    <span className="mr-2 uppercase">{genre?.name}</span>
                    <CiLocationArrow1 className="text-sm" />
                  </p>
                ))}
                {/* <AiOutlineStar />
                <p className="">Genre</p> */}
              </button>

              {/* <button className="px-4 py-2 uppercase border-[1px] flex justify-center items-center gap-2 rounded-lg bg-light-blue">
                <AiOutlineStar />
                <p className="">Genre</p>
              </button> */}
            </div>
          </div>

          <div className="border mt-3">
            <h1 className="font-bold">Information:</h1>
            <p className="border mt-3">{data?.overview}</p>
          </div>
          <div className="w-full border mt-5">
            <h1 className="font-bold mb-3">Top Cast:</h1>
            <div className="border flex flex-wrap justify-center items-center gap-2">
              {data?.credits?.cast
                .map((character, index) => (
                  <div
                    key={index}
                    className="mt-2 flex w-[100px] flex-col items-center justify-start"
                  >
                    <img
                      className="w-full rounded-2xl"
                      src={`https://image.tmdb.org/t/p/w500/${character?.profile_path}`}
                      alt={character?.name}
                    />
                    <p
                      className="mt-2 w-full overflow-hidden overflow-ellipsis 
                    whitespace-nowrap     text-center text-sm"
                    >
                      {character?.name}
                    </p>
                  </div>
                ))
                .slice(0, 6)}
            </div>
          </div>
          <div className=" border w-full mt-3 flex justify-start items-center">
            <button className=" border py-3 px-2 rounded-lg mr-4 flex justify-center items-center gap-2">
              <a href={data?.homepage} target="blank">
                <span> Website </span>
                <GoTriangleRight />
              </a>
            </button>
            <button
              onClick={() => {
                setModalActive(true);
              }}
              className=" border py-3 px-2 rounded-lg flex justify-center items-center gap-2"
            >
              <span>Trailer</span>
              <GoTriangleRight />
            </button>
            <Modal
              data={data}
              modalActive={modalActive}
              modalClose={() => {
                setModalActive(false);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieInformation;
