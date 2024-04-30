import BigMovieSection from '@/components/BigMovieSection'
import FavouritesSection from '@/components/FavouritesSection'
import Navbar from '@/components/Navbar'
import Trending from '@/components/Trending'
import { getMovies } from '@/lib/actions/movie.actions'
import { movieInterface } from '@/lib/database/models/movie.model'
import React from 'react'

const page = async({params}: {params: {profile: string}}) => {
  const movies: movieInterface[] = await getMovies() || [];
  return (
    <div className='bg-[#0f1014] h-screen'>
      <Navbar/>
      <BigMovieSection movies={JSON.parse(JSON.stringify(movies))}/>
      <Trending movies={JSON.parse(JSON.stringify(movies))}/>
      <FavouritesSection/>
    </div>
  )
}

export default page