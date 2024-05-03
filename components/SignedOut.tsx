import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGreaterThan } from "react-icons/fa";
const SignedOut = () => {
  return (
    <div className='bg-[url("/images/hero.jpg")] h-full w-full relative bg-no-repeat bg-center bg-cover'>
      <div className="bg-black lg:bg-opacity-50 w-full h-full pt-5 flex justify-center">
        <div className="w-[80%]">
          <div className="flex justify-between items-center">
            <Image
              src="/images/logo.png"
              alt="logo"
              height={0}
              width={0}
              className="h-10 w-auto"
              unoptimized
              quality={100}
            />
            <Link
              href="/login"
              className="bg-[#E50914] px-[2rem] py-[0.5rem] rounded-md text-white text-[0.9rem] text-center"
            >
              Sign In
            </Link>
          </div>
        </div>
        <div className="text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center gap-5 w-full max-sm:text-center">
          <h1 className="text-[3rem] font-[900]">
            Unlimited movies, TV shows and more
          </h1>
          <p className="text-[1.5rem] font-[400] max-sm:w-[95%]">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="text-[1.25rem] font-[400]">
            Ready to watch? Enter your email to create or restart your
            membership
          </p>
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-2 items-center w-full justify-center">
            <input
              type="text"
              className="h-[3.5rem] w-[25rem] bg-gray-600 bg-opacity-30 border-gray-500 border-[1px] rounded-[0.25rem] pl-4 max-sm:w-[80%]" 
              placeholder="Email address"
            />
            <a className="bg-[#E50914] p-[0.8rem] rounded-[0.25rem] font-bold text-[1.3rem] hover:cursor-pointer tracking-widest">
              Get Started <FaGreaterThan className="inline"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignedOut;
