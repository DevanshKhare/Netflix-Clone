import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='bg-[url("/images/hero.jpg")] h-full w-full relative bg-no-repeat bg-center bg-cover'>
        <div className='bg-black lg:bg-opacity-50 w-full h-full pt-5 flex justify-center'>
            <div className='w-[80%]'>
                <div className='flex justify-between items-center'>
                <Image src="/images/logo.png" alt='logo' height={0} width={0} className='h-10 w-auto' unoptimized quality={100}/>
                </div>
            </div>
            <div className='text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center bg-black bg-opacity-80 w-[20rem] py-[1rem] px-[1rem]'>
                <h1 className='text-[2rem] font-bold'>Sign In</h1>
            </div>
        </div>
    </div>
  )
}

export default page