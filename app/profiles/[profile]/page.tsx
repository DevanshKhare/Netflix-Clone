import BigMovieSection from '@/components/BigMovieSection'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = ({params}: {params: {profile: string}}) => {
  return (
    <div className='bg-[#0f1014] h-screen'>
      <Navbar/>
      <BigMovieSection/>
    </div>
  )
}

export default page