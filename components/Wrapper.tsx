"use client"
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import AuthWrapper from './AuthWrapper'

const Wrapper = ({children}: {children: any}) => {
  return (
    <SessionProvider>
        <AuthWrapper>
        <>{children}</>
        </AuthWrapper>
    </SessionProvider>
  )
}

export default Wrapper