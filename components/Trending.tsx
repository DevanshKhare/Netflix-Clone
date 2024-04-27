import { movieInterface } from "@/lib/database/models/movie.model";
import Image from "next/image";
import React from "react";

const Trending = ({ movies }: { movies: movieInterface[] }) => {
  return (
    <div className="text-white relative w-[95%] m-auto mt-5 text-[1.5rem]">
      <h1>Trending Now</h1>
      <div className="h-auto flex flex-wrap mt-2 cursor-pointer">
        {movies.map((movie) => (
          <div className="m-2 rounded-sm">
            <Image
              src={movie?.thumbnailUrl}
              alt="thumbnail"
              width={0}
              height={0}
              className="h-[8rem] w-[16rem] rounded-sm"
              unoptimized
            />
            <div className="w-full h-full hover:block">
              <h2>Title</h2>
              <p>Description</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
