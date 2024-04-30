import { movieInterface } from "@/lib/database/models/movie.model";
import React from "react";

import MovieCard from "./MovieCard";
import { getUserByEmail } from "@/lib/actions/user.actions";
import { getServerSession } from "next-auth";

const Trending = async({ movies }: { movies: movieInterface[] }) => {
  const session= await getServerSession()
  let user: any;
  if(session?.user?.email){
    user = await getUserByEmail(session?.user?.email)
  }
  return (
    <div className="text-white relative w-[95%] m-auto mt-5">
      <h1 className="text-[1.5rem]">Trending Now</h1>
      <div className="h-auto flex mt-2">
        {movies.map((movie) => (
          <MovieCard movie={movie} favourites={user?.favourites} user={user?.email}/>
        ))}
      </div>
    </div>
  );
};

export default Trending;
