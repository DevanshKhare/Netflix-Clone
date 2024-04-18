"use client";
import Image from "next/image";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string(),
});

const page = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
  }

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
                    <FormControl>
                      <Input placeholder="username" {...field} className="mt-[2rem] mb-[1rem] h-[3.5rem] rounded-sm bg-zinc-900"/>
                    </FormControl>
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
                        className="mb-[1rem] h-[3.5rem] rounded-sm bg-zinc-900 bg-opacity-50 "
                        type="password"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-[100%] bg-red-600 mt-[3rem]">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default page;
