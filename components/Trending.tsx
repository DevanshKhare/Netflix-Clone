import { addOrRemoveFavourite } from "@/lib/actions/user.actions";
import { movieInterface } from "@/lib/database/models/movie.model";
import React from "react";

import MovieCard from "./MovieCard";

const Trending = ({ movies }: { movies: movieInterface[] }) => {

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
