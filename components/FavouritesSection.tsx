import { getUserFavouriteMovies } from "@/lib/actions/user.actions";
import { getServerSession } from "next-auth";
import React from "react";
import FavouriteCard from "./FavouriteCard";
import { movieInterface } from "@/lib/database/models/movie.model";

const FavouritesSection = async () => {
  const session = await getServerSession();
  let favourites: any;
  if (session?.user?.email) {
    favourites = await getUserFavouriteMovies(session?.user?.email);
  }
  if(!favourites.length) return <></>
  return (
    <div className="text-white relative w-[95%] m-auto mt-5">
      <h1 className="text-[1.5rem]">Favourites</h1>
      <div className="h-auto flex flex-wrap mt-2">
        {favourites.map((movie: movieInterface, index: number) => (
          <FavouriteCard movie={JSON.parse(JSON.stringify(movie))} user={session?.user?.email} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default FavouritesSection;
