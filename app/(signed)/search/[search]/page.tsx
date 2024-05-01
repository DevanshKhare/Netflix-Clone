import MovieCard from '@/components/MovieCard'
import { searchMovie } from '@/lib/actions/movie.actions'
import React from 'react'

const page = async({params}: {params: {search?: string}}) => {
  let movies
  if(params?.search){
    movies = await searchMovie(params?.search)
  }
  if(movies && movies?.length == 0 ) return <h1 className='text-[1.5rem] text-white'>No matching results</h1>
  return (
    <div className="text-white relative w-[95%] m-auto mt-5">
      <h1 className="text-[1.5rem]">Search Results</h1>
      <div className="h-auto flex mt-2">
        {movies?.map((movie, index: number) => (
          <MovieCard key={index} movie={movie} search={true}/>
        ))}
      </div>
    </div>
  )
}

export default page