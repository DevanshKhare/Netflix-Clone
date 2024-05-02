"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import SessionContext from "@/context/SessionContext";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

const AuthWrapper = ({ children }: { children: any }) => {
  const { data: session, status } = useSession();
  const [oldStatus, setOldStatus] = useState("");
  const router = useRouter();
  const pathname = usePathname()
  useEffect(() => {
    if (oldStatus == "authenticated" && status == "unauthenticated") {
      router.push("/");
    }
    setOldStatus(status);
  }, [status]);

  return <>
  <SessionContext.Provider value={JSON.stringify(session)}>
    {session && pathname!="/profiles" && pathname!="/login" && !pathname.startsWith("/movie/") && <Navbar/>}
    {children}
  </SessionContext.Provider>
  </>;
};

export default AuthWrapper;
