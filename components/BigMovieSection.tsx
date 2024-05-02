import { movieInterface } from "@/lib/database/models/movie.model";
import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaPlayCircle } from "react-icons/fa";
import Link from "next/link";

const BigMovieSection = ({ movies }: { movies: movieInterface[] }) => {
  if (!movies?.length) return <div>Loading...</div>;
  const randomMovie = movies[Math.floor(Math.random() * movies?.length)];
  return (
    <div className="relative w-full h-[56.5vh] max-sm:h-[30vh] top-0 text-white">
      <video
        src={randomMovie?.videoUrl}
        muted
        autoPlay
        className="relative h-[100%] w-screen object-cover brightness-[60%]"
        loop
      ></video>
      <div className="absolute top-[30%] left-[5rem] max-w-[40%] max-sm:top-[20%] max-sm:left-[2rem] max-sm:max-w-[80%]">
        <h1 className="text-[2rem] mb-[0.5rem] lg:mb-[2rem] max-sm:max-w[60%]">{randomMovie?.title}</h1>
        <p className="text-slate-300 truncate">{randomMovie?.description}</p>
        <div className="flex gap-5 items-center mt-5">
          <button className="text-white p-2 rounded-md bg-white bg-opacity-30 hover:bg-opacity-20 flex items-center">
          <IoIosInformationCircleOutline className="mr-1" fontSize={20} />
            More Info
          </button>
          <Link href={`/movie/${randomMovie._id.toString()}`}>
            <FaPlayCircle className="mr-1" fontSize={40} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BigMovieSection;
