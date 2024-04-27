import { getMovies } from '@/lib/actions/movie.actions';
import React from 'react'
import { IoIosInformationCircleOutline } from "react-icons/io";

const BigMovieSection = async() => {
  const movies = await getMovies();
  if(!movies?.length) return <div>Loading...</div>
  const randomMovie = movies[Math.floor(Math.random()*movies?.length)]
  return (
    <div className='absolute w-full h-[56.5vh] top-0 text-white'>
      <video src={randomMovie?.videoUrl} autoPlay muted className='relative h-[100%] w-screen object-cover brightness-[60%]' loop></video>
      <div className='absolute top-[40%] left-[5rem] max-w-[40%]'>
        <h1 className='text-[2rem]'>{randomMovie?.title}</h1>
        <p className='text-slate-300'>{randomMovie?.description}</p>
        <button className='mt-5 text-white p-2 rounded-md bg-white bg-opacity-30 hover:bg-opacity-20 flex items-center'>
          <IoIosInformationCircleOutline className='mr-1' fontSize={20}/>
          More Info
        </button>
      </div>
    </div>
  )
}

export default BigMovieSection