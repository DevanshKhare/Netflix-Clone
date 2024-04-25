import Navbar from '@/components/Navbar'
import React from 'react'

const page = ({params}: {params: {profile: string}}) => {
  return (
    <div className='bg-[#0f1014] h-screen'>
      <Navbar/>
    </div>
  )
}

export default page