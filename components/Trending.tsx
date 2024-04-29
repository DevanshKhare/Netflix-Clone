"use client"
import { addOrRemoveFavourite } from "@/lib/actions/user.actions";
import { movieInterface } from "@/lib/database/models/movie.model";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

import MovieCard from "./MovieCard";

const Trending = ({ movies }: { movies: movieInterface[] }) => {
  const {data: session} = useSession()



  return (
    <div className="text-white relative w-[95%] m-auto mt-5">
      <h1 className=" text-[1.5rem]">Trending Now</h1>
      <div className="h-auto flex flex-wrap mt-2">
        {movies.map((movie) => (
          <MovieCard movie={movie}/>
        ))}
      </div>
    </div>
  );
};

export default Trending;
