import { useAuth } from '@/context/AuthContext'
import React, { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [isLoginIn, setIsLoginIn] = useState(true)

  const { login, signup, currentUser } = useAuth()
  console.log(currentUser)

  async function submitHandler() {
    if (!email || !password) {
      setError('Please enter a email and password')
      return
    }
    if (isLoginIn) {
      try {
        return await login(email, password)
      } catch (err) {
        setError("Incorrect email or password")
      }
    }
    await signup(email, password)
  }

  return (
    <div className='flex-1 flex flex-col text-xm sm:text-sm
    justify-center items-center gap-4 sm:gap-8 select-none'>
      <h1 className='font-extrabold text-2xl sm:text-4xl uppercase'>
        {isLoginIn ? 'Login' : 'Register'}
      </h1>
      {error && 
      <div className='w-full max-w-[30ch] border-rose-400 text-rose-400 text-center py-2'>{error}</div>}
      <input value={email} onChange={(e) => setEmail(e.target.value)} type='text' className='outline-none text-slate-900 p-2 w-full 
      max-w-[30ch] duration-300 border-b-2 border-solid border-white focus:border-cyan-300' placeholder='Email Address'></input>
      <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' className='outline-none text-slate-900 p-2 w-full 
      max-w-[30ch] duration-300 border-b-2 border-solid border-white focus:border-cyan-300' placeholder='Password'></input>

      <button onClick={submitHandler} className='w-full max-w-[30ch] border border-white border-solid 
      uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white
      after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900'>
        <h2 className='relative z-20'>
        Submit
        </h2>
        </button>
        <h2 className='duration-300 hover:scale-110 cursor-pointer' onClick={() => setIsLoginIn(!isLoginIn)}>{!isLoginIn ? 'Login' : 'Register'}</h2>
    </div>
      
  )
}
