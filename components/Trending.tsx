import { movieInterface } from "@/lib/database/models/movie.model";
import Image from "next/image";
import React from "react";

const Trending = ({ movies }: { movies: movieInterface[] }) => {
  console.log(movies)
  return (
    <div className="text-white relative w-[95%] m-auto mt-5">
      <h1 className=" text-[1.5rem]">Trending Now</h1>
      <div className="h-auto flex flex-wrap mt-2">
        {movies.map((movie) => (
          <div className="m-2 rounded-sm cursor-pointer hover:scale-125 trending">
            <Image
              src={movie?.thumbnailUrl}
              alt="thumbnail"
              width={0}
              height={0}
              className="h-[8rem] w-[16rem] rounded-sm"
              unoptimized
            />
            <div className="w-full h-full opacity-0 trendingDesc">
              <h1>{movie.title}</h1>
              <p>Description</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
