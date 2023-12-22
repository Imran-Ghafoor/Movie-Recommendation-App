import React from "react";
import Star from "../Star";
import { AiOutlineStar } from "react-icons/ai";

import { GoTriangleRight } from "react-icons/go";
const MovieInformation = () => {
  return (
    <section
      className="  w-full flex flex-col justify-center items-center max-w-[1700px] 
     lg:flex-row lg:items-start "
    >
      <div className=" border  w-full flex flex-col justify-center items-center lg:w-1/2">
        <div className=" w-1/2 my-5 shadow-lg shadow-light-blue rounded-2xl overflow-hidden">
          <img src="./poster.png" alt="poster" className="w-full" />
        </div>
      </div>
      <div className="  w-full  flex flex-col justify-start items-center text-white p-5 lg:w-1/2">
        {/* info all */}
        <div className="w-[70%]">
          <div className="border text-center w-full">
            <h1 className="font-black text-4xl ">Batman</h1>
            <p className="text-sm mt-2">
              Every good this in this world started with a dream
            </p>
          </div>
          <div className="border w-full flex flex-col justify-center items-center mt-3 lg:justify-between lg:flex-row ">
            <Star />
            <p className="">117min / 2023-12-06 / English</p>
          </div>
          <div className="border mt-3 w-full">
            <h1 className="font-bold mb-3">Genre:</h1>
            <div className=" gap-4 flex uppercase">
              <button className="px-4 py-2 uppercase border-[1px] flex justify-center  items-center gap-2 rounded-lg bg-light-blue">
                <AiOutlineStar />
                <p className="">Genre</p>
              </button>

              <button className="px-4 py-2 uppercase border-[1px] flex justify-center items-center gap-2 rounded-lg bg-light-blue">
                <AiOutlineStar />
                <p className="">Genre</p>
              </button>
            </div>
          </div>

          <div className="border mt-3">
            <h1 className="font-bold">Information:</h1>
            <p className="border mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              nostrum sapiente cum quidem. Distinctio at quas sit iste
              recusandae numquam. Nulla, obcaecati consequatur. Esse magnam
              libero doloremque, illum ducimus atque.
            </p>
          </div>
          <div className="w-full border mt-5">
            <h1 className="font-bold mb-3">Top Cast:</h1>
            <div className="border flex flex-wrap justify-center items-center gap-2">
              <div className=" flex flex-col justify-center items-center">
                <div className="w-[100px] rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1587944308214-cb558d66cfe6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="cast image"
                  />
                </div>
                <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                  cast name
                </p>
              </div>

              <div className=" flex flex-col justify-center items-center">
                <div className="w-[100px] rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1587944308214-cb558d66cfe6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="cast image"
                  />
                </div>
                <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                  cast name
                </p>
              </div>
              <div className=" flex flex-col justify-center items-center">
                <div className="w-[100px] rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1587944308214-cb558d66cfe6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="cast image"
                  />
                </div>
                <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                  cast name
                </p>
              </div>
              <div className=" flex flex-col justify-center items-center">
                <div className="w-[100px] rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1587944308214-cb558d66cfe6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="cast image"
                  />
                </div>
                <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                  cast name
                </p>
              </div>
            </div>
          </div>
          <div className=" border w-full mt-3 flex justify-start items-center">
            <button className=" border py-3 px-2 rounded-lg mr-4 flex justify-center items-center gap-2">
              <span> Website </span>
              <GoTriangleRight />
            </button>
            <button className=" border py-3 px-2 rounded-lg flex justify-center items-center gap-2">
              <span>Trailer</span>
              <GoTriangleRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieInformation;
