import { NavItems } from '@/Constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <>
        <div className='border-white border mx-[2rem] py-4 px-2 flex flex-row items-center'>
            <Image src="/images/logo.png" alt='logo' height={0} width={0}  className='h-10 w-auto' unoptimized/>
            <div className='flex flex-row text-white ml-[2rem]'>
                <ul className='flex flex-row gap-7'>
                    {NavItems.map((item: {link: string, text: string})=>(
                        <Link href={item.link} key={item.text}>{item.text}</Link>
                    ))}
                </ul>
            </div>
            <div className='text-white ml-[auto] gap-6'>
                <CiSearch fontSize={25}/>
                <IoIosNotificationsOutline fontSize={25}/>
            </div>
        </div>

    </>
  )
}

export default Navbar