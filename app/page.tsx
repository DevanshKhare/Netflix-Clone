import BigMovieSection from "@/components/BigMovieSection";
import FavouritesSection from "@/components/FavouritesSection";
import SignedOut from "@/components/SignedOut";
import Trending from "@/components/Trending";
import { getMovies } from "@/lib/actions/movie.actions";
import { movieInterface } from "@/lib/database/models/movie.model";
import React from "react";
import { getServerSession } from "next-auth";

const Home = async() => {
  const session = await getServerSession();
  const movies: movieInterface[] = await getMovies() || [];

  return (
    <div className="h-screen">
      {session && (
        <>
          <BigMovieSection movies={JSON.parse(JSON.stringify(movies))} />
          <Trending movies={JSON.parse(JSON.stringify(movies))} />
          <FavouritesSection />
        </>
      )}
      {!session && <SignedOut />}
    </div>
  );
};

export default Home;
