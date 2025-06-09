"use client"
import { githubLogin, googleLogin } from '@/app/lib/actions/authActions'
import React from 'react'

const SignIn = () => {
  return (
    <div>
        <button onClick={() => githubLogin()}>Github Login</button>
        <button onClick={() => googleLogin()}>Google Login</button>
    </div>
  )
}

export default SignIn