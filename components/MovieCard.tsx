"use client";
import { addOrRemoveFavourite } from "@/lib/actions/user.actions";
import { movieInterface } from "@/lib/database/models/movie.model";
import Image from "next/image";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

const MovieCard = ({ movie, favourites, user }: { movie: movieInterface, favourites: string[], user: string }) => {
  const isFavourite = favourites.includes(movie?._id);
  const handleFavourite = async () => {
      await addOrRemoveFavourite(user, movie?._id, isFavourite);
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
        {isFavourite ? (
          <FaCheck fontSize={30} className="ml-2 mb-2 inline-block" onClick={handleFavourite}/>
        ) : (
          <IoAddCircleOutline
            fontSize={30}
            className="ml-2 mb-2 inline-block"
            onClick={handleFavourite}
          />
        )}
        <h1 className="text-[1.2rem]">{movie.title}</h1>
        <p>{movie.duration}</p>
        <p className="text-teal-700">{movie.genre}</p>
      </div>
    </div>
  );
};

export default MovieCard;
