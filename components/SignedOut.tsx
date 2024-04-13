import Image from 'next/image'
import React from 'react'

const SignedOut = () => {
  return (
    <div className='bg-[url("/images/hero.jpg")] h-full w-full relative bg-no-repeat bg-center bg-cover'>
        <div className='bg-black lg:bg-opacity-70 w-full h-full pt-5 flex justify-center'>
            <div className='w-[80%]'>
                <div className='flex justify-between items-center'>
                <Image src="/images/logo.png" alt='logo' height={0} width={0} className='h-12 w-auto' unoptimized quality={100}/>
                <button className='bg-[#E50914] w-[5rem] h-[1.8rem] rounded-md text-white text-[0.9rem]'>Sign In</button>
                </div>
            </div>
            <div className='text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center gap-5'>
                <h1 className='text-[3rem] font-[900]'>Unlimited movies, TV shows and more</h1>
                <p className='text-[1.5rem] font-[400]'>Watch anywhere. Cancel anytime.</p>
                <p className='text-[1.25rem] font-[400]'>Ready to watch? Enter your email to create or restart your membership</p>
                <div className='flex flex-row gap-2 items-center'>
                    <input type="text" className='h-[3rem] w-[20rem] bg-gray-600 bg-opacity-30 border-gray-500 border-[1px] rounded-[0.25rem] pl-4' placeholder='Email address'/>
                    <a className='bg-[#E50914] p-[0.7rem] w-[10rem] rounded-[0.25rem] font-bold text-[1.1rem] hover:cursor-pointer'>Get Started &nbsp;&gt;</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignedOut