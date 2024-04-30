"use client";
import Image from "next/image";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { movieInterface } from "@/lib/database/models/movie.model";
import { addOrRemoveFavourite } from "@/lib/actions/user.actions";

const FavouriteCard = ({
  movie,
  user,
}: {
  movie: movieInterface;
  user: string;
}) => {
  const handleRemoveFavourite = async () => {
    await addOrRemoveFavourite(user, movie?._id, true);
  };
  return (
    <div className="m-2 rounded-sm cursor-pointer hover:scale-110 hover:translate-y-[-8%] trending  transition duration-500">
      <Image
        src={movie?.thumbnailUrl}
        alt="thumbnail"
        width={0}
        height={0}
        className="h-[10rem] w-[16rem] rounded-sm"
        unoptimized
      />
      <div className="opacity-0 trendingDesc mt-5 text-[0.8rem] pl-2 w-full">
        <FaCirclePlay fontSize={30} className="mb-2 inline-block" />
        <FaCheck
          fontSize={30}
          className="ml-2 mb-2 inline-block"
          onClick={handleRemoveFavourite}
        />
        <h1 className="text-[1.2rem]">{movie.title}</h1>
        <p>{movie.duration}</p>
        <p className="text-teal-700">{movie.genre}</p>
      </div>
    </div>
  );
};

export default FavouriteCard;
