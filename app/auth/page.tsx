import InputComponent from '@/components/InputComponent'
import Image from 'next/image'
import React from 'react'

const Auth = () => {
  return (
    <div className='relative h-full w-full bg-[url("/images/hero.jpg")] bg-no-repeat bg-center bg-fixed bg-cover'>
        <div className='bg-black w-full h-full lg:bg-opacity-50'>
            <nav className='px-12 py-5'>
                <Image src="/images/logo.png" alt='logo' height={0} width={0} className='h-12 w-auto' quality={100} unoptimized/>
            </nav>
            <div className='flex justify-center'>
                <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                    <h2 className='text-white text-4xl mb-8 font-semibold'>Sign in</h2>
                    <div className='flex flex-col gap-4'>
                        <InputComponent/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Auth