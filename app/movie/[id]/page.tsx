import { getMovieById } from "@/lib/actions/movie.actions";
import Link from "next/link";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";

const page = async ({ params }: { params: { id: string } }) => {
  const movieId = params.id;
  const movie = await getMovieById(movieId);
  console.log(movie)
  return (
    <div className="text-white ">
      <Link href={`/profiles`} className="relative z-[999]">
        <div className="flex flex-row items-center mt-10 ml-10 gap-3 cursor-pointer">
          <FaChevronLeft />
          <h1 >Watching {movie?.title}</h1>
        </div>
      </Link>
      <div className="flex flex-row items-center gap-3 absolute top-0 h-auto w-full justify-center">
        <video src={movie?.videoUrl} controls className="h-screen w-full"></video>
      </div>
    </div>
  );
};

export default page;
