"use client"
import SessionContext from '@/context/SessionContext'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useContext } from 'react'

const page = () => {
  const sessionString = useContext(SessionContext)
  let session
  if (sessionString){
    session = JSON.parse(sessionString)
  }
  return (
    <div className='bg-[#0f1014] h-screen flex justify-center items-center'>
        <div className='flex w-[80%] h-[70%] items-center flex-col justify-center'>
            <div className='text-white self-start text-[2rem] font-bold text-center w-full'>Who is watching?</div>
            <div className='flex items-center justify-center w-[80%] h-[80%]'>
                <div className='flex items-center flex-col cursor-pointer'>
                  <Link href={`/profiles/${session?.user?.username}`} className='flex items-center flex-col'>
                    <Image src="/images/avatar.png" alt='avatar' height={0} width={0} className='rounded-sm h-[8rem] w-[8rem]' unoptimized/>
                    <p className='text-white mt-[2rem]'>{session?.user?.username}</p>
                  </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page