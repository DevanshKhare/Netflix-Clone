import { movieInterface } from "@/lib/database/models/movie.model";
import Image from "next/image";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";

const Trending = ({ movies }: { movies: movieInterface[] }) => {
  return (
    <div className="text-white relative w-[95%] m-auto mt-5">
      <h1 className=" text-[1.5rem]">Trending Now</h1>
      <div className="h-auto flex flex-wrap mt-2">
        {movies.map((movie) => (
          <div className="m-2 rounded-sm cursor-pointer hover:scale-110 hover:translate-y-[-2vw] trending">
            <Image
              src={movie?.thumbnailUrl}
              alt="thumbnail"
              width={0}
              height={0}
              className="h-[8rem] w-[16rem] rounded-sm"
              unoptimized
            />
            <div className="w-full h-full opacity-0 trendingDesc mt-5 text-[0.8rem] pl-2">
              <FaCirclePlay fontSize={30} className="mb-2 inline-block"/>
              <h1 className="inline-block ml-2 text-[1.2rem]">{movie.title}</h1>
              <p>{movie.duration}</p>
              <p className="text-teal-700">{movie.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
