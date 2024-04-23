"use client";
import Image from "next/image";
import React, { useState } from "react";
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
import {
  getUserByEmail,
  getUserByUsername,
  registerUser,
} from "@/lib/actions/user.actions";
import Link from "next/link";

const loginSchema = z.object({
  email: z.string().min(2, {
    message: "Enter valid email",
  }),
  password: z.string().min(3, {
    message: "password cannot be less than 3 characters",
  }),
  username: z.string().min(3, {
    message: "username cannot be less than 3 characters",
  }),
});

const page = () => {
  const [isEmailExist, setIsEmailExist] = useState(false);
  const [usernameExist, setUsernameExist] = useState(false);
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    const userByEmail = await getUserByEmail(values.email);
    const userByUsername = await getUserByUsername(values.username);
    if (userByEmail) {
      setIsEmailExist(true);
    } else if (userByUsername) {
      setUsernameExist(true);
    } else {
      const registered = await registerUser(
        values.email,
        values.password,
        values.username
      );
    }
  }

  const handleKeyUp = () => {
    setIsEmailExist(false);
    setUsernameExist(false);
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
          <h1 className="text-[2rem] font-bold">Sign Up</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mb-[1rem]">
                    {isEmailExist && (
                      <FormLabel className="text-red-600 mb-2rem">
                        Account already exists with this email
                      </FormLabel>
                    )}
                    <FormControl>
                      <Input
                        placeholder="email"
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
                name="username"
                render={({ field }) => (
                  <FormItem>
                    {usernameExist && (
                      <FormLabel className="text-red-600 mb-2rem">
                        Username already used
                      </FormLabel>
                    )}
                    <FormControl>
                      <Input
                        placeholder="username"
                        {...field}
                        className="mb-[1rem] h-[3.5rem] rounded-sm bg-zinc-900"
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
              <Link href="/login">Already have an account? Sign In</Link>

              <Button type="submit" className="w-[100%] bg-red-600 mt-[3rem]">
                Sign Up
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default page;
