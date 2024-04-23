import Image from 'next/image'
import React from 'react'
import { getServerSession } from 'next-auth'

const page = async() => {
    const session = await getServerSession()
  return (
    <div className='bg-[#0f1014] h-screen flex justify-center items-center'>
        <div className='flex w-[80%] h-[70%] items-center flex-col justify-center'>
            <div className='text-white self-start text-[2rem] font-bold text-center w-full'>Who is watching?</div>
            <div className='flex items-center justify-center w-[80%] h-[80%]'>
                <div className='flex items-center flex-col cursor-pointer'>
                    <Image src="/images/avatar.png" alt='avatar' height={100} width={100} className='rounded-sm'/>
                    <p className='text-white mt-[2rem]'>{session?.user?.email}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page