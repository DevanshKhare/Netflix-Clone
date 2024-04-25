"use client"
import { NavItems, DropdownMenuItems } from '@/Constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoIosLogOut } from "react-icons/io";
import { signOut } from 'next-auth/react';

const Navbar = () => {
  return (
    <>
      <div className="mx-[2rem] py-4 px-2 flex flex-row items-center sticky z-10">
        <Image
          src="/images/logo.png"
          alt="logo"
          height={0}
          width={0}
          className="h-10 w-auto"
          unoptimized
        />
        <div className="flex flex-row text-white ml-[2rem]">
          <ul className="flex flex-row gap-7">
            {NavItems.map((item: { link: string; text: string }) => (
              <Link href={item.link} key={item.text}>
                {item.text}
              </Link>
            ))}
          </ul>
        </div>
        <div className="text-white ml-[auto] gap-6 flex flex-row mr-[1rem]">
          <CiSearch fontSize={25} />
          <IoIosNotificationsOutline fontSize={25} />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Image
                src="/images/avatar.png"
                alt="avatar"
                width={30}
                height={30}
                className="outline-none border-none"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-[#0f1014] border text-white'>
              {DropdownMenuItems.map((item) => (
                <DropdownMenuItem className="cursor-pointer hover:bg-slate-800 text-gray-400" key={item.text}>
                    <Link href={item.link}>
                        {item.text}
                    </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator/>
              <DropdownMenuItem className='cursor-pointer' onClick={()=>signOut()}><IoIosLogOut fontSize={23}/>&nbsp;Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}

export default Navbar