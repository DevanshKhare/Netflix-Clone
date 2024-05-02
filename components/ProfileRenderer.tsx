"use client"
import SessionContext from '@/context/SessionContext'
import Image from 'next/image'
import React from 'react'
import { useContext } from 'react'
import { useRouter } from 'next/navigation'

const ProfileRenderer = () => {
const sessionString = useContext(SessionContext)
  const router = useRouter()
  let session:any
  if (sessionString){
    session = JSON.parse(sessionString)
  }
  return (
    <div className='bg-[#0f1014] h-screen flex justify-center items-center'>
        <div className='flex w-[80%] h-[70%] items-center flex-col justify-center'>
            <div className='text-white self-start text-[2rem] font-bold text-center w-full'>Who is watching?</div>
            <div className='flex items-center justify-center w-[80%] h-[80%]'>
                <div className='flex items-center flex-col cursor-pointer' onClick={()=>router.replace(`/?logged=true`)}>
                    <Image src="/images/avatar.png" alt='avatar' height={0} width={0} className='rounded-sm h-[8rem] w-[8rem]' unoptimized/>
                    <p className='text-white mt-[2rem]'>{session?.user?.username}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileRenderer