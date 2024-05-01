"use client";
import { addOrRemoveFavourite } from "@/lib/actions/user.actions";
import { movieInterface } from "@/lib/database/models/movie.model";
import Image from "next/image";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { IoAddCircleOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const MovieCard = ({
  movie,
  favourites,
  user,
  search,
}: {
  movie: movieInterface;
  favourites?: string[];
  user?: string;
  search?: boolean;
}) => {
  const isFavourite = favourites?.includes(movie?._id);
  const router = useRouter();
  const handleFavourite = async () => {
    await addOrRemoveFavourite(user, movie?._id, isFavourite);
  };
  return (
    <div className="relative m-2 rounded-md cursor-pointer hover:scale-110 hover:translate-y-[-8%] trending top-0 trending w-[20rem] transition duration-500 group">
      <Image
        src={movie?.thumbnailUrl}
        alt="thumbnail"
        width={0}
        height={0}
        className="h-[10rem] w-[20rem] rounded-sm "
        unoptimized
      />
      <div className="opacity-0 mt-5 text-[0.8rem] pl-2 w-full group-hover:opacity-100">
        <FaCirclePlay
          fontSize={30}
          className="mb-2 inline-block"
          onClick={() => router.push(`/movie/${movie?._id}`)}
        />
        {search ? null : isFavourite ? (
          <FaCheck
            fontSize={30}
            className="ml-2 mb-2 inline-block"
            onClick={handleFavourite}
          />
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
