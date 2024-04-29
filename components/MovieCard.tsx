"use client"
import { movieInterface } from "@/lib/database/models/movie.model";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { IoAddCircleOutline } from "react-icons/io5";

const MovieCard = ({ movie }: { movie: movieInterface }) => {
  const { data: session } = useSession();
  const handleFavourite = async (event: any) => {
    console.log(event.target, movie);
    // await addOrRemoveFavourite(session?.user?.email)
  };
  return (
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
        <FaCirclePlay fontSize={30} className="mb-2 inline-block" />
        <IoAddCircleOutline
          fontSize={30}
          className="ml-2 mb-2 inline-block"
          onClick={handleFavourite}
        />
        <h1 className="text-[1.2rem]">{movie.title}</h1>
        <p>{movie.duration}</p>
        <p className="text-teal-700">{movie.genre}</p>
      </div>
    </div>
  );
};

export default MovieCard;
