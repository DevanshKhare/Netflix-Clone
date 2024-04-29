"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getUserByEmail, getUserByEmailOrUsername, login } from "@/lib/actions/user.actions";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { decode } from "next-auth/jwt";

const loginSchema = z.object({
  username: z.string().min(2, {
    message: "Enter valid email",
  }),
  password: z.string().min(3, {
    message: "Enter valid password"
  }),
});


const page = () => {

  const [isSignUp, setIsSignUp] = useState(false);
  const [invalidCredentials, setInvalidCredentails] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    const user = await getUserByEmailOrUsername(values.username);
    if (!user) {
      setIsSignUp(true);
    } else {
      try {
        const userLogin = await signIn("credentials", {
          username: values.username,
          password: values.password,
          redirect: false,
        });
        if (userLogin && !userLogin?.ok) {
          setInvalidCredentails(true);
        } else {
          router.push("/profiles");
        }
      } catch (error) {
        console.log("error:", error);
      }
    }
  }

  const handleKeyUp = () => {
    setIsSignUp(false);
    setInvalidCredentails(false);
  };

  return (
    <div className='bg-[url("/images/hero.jpg")] h-screen w-full relative bg-no-repeat bg-center bg-cover'>
      <div className="bg-black lg:bg-opacity-50 w-full h-full pt-5 flex justify-center h-d">
        <div className="w-[80%]">
          <div className="flex justify-between items-center ">
            <Image
              src="/images/logo.png"
              alt="logo"
              height={0}
              width={0}
              className="h-10 w-auto"
              unoptimized
              quality={100}
            />
          </div>
        </div>
        <div className="text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-start items-start px-[4rem] bg-black bg-opacity-80 w-[25rem] h-[80%] py-[4rem]">
          <h1 className="text-[2rem] font-bold">Sign In</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    {isSignUp && (
                      <FormLabel className="text-red-600 mb-2rem">
                        User does not exist. Please register!
                      </FormLabel>
                    )}
                    <FormControl>
                      <Input
                        placeholder="username or email"
                        {...field}
                        className="mt-[2rem] mb-[1rem] h-[3.5rem] rounded-sm bg-zinc-900"
                        onKeyUp={handleKeyUp}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="password"
                        {...field}
                        className="mb-[1rem] h-[3.5rem] rounded-sm bg-zinc-900 bg-opacity-50 mt-[1rem]"
                        type="password"
                        onKeyUp={handleKeyUp}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {invalidCredentials && (
                <p className="text-red-600">Invalid Credentials</p>
              )}
              <span className="text-zinc-400 text-[0.9rem]">New to Netflix?</span><Link href="/signup" className="text-[0.9rem]"> Sign up now.</Link>
              <Button type="submit" className="w-[100%] bg-red-600 mt-[3rem]">
                Sign In
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default page;
