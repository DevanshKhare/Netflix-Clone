"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const AuthWrapper = ({children}: {children:any}) => {
    const {data: session, status} = useSession()
    const [oldStatus, setOldStatus] = useState("");
    const router = useRouter()

    useEffect(()=>{
        if(oldStatus=="authenticated" && status=="unauthenticated"){
            router.push("/")
        }
        setOldStatus(status)
    },[status])

  return (
    <>{children}</>
  )
}

export default AuthWrapper