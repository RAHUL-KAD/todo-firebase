import React from 'react'

export default function Header() {
  return (
    <div className='sticky top-0 w-full left-0 flex items-center 
    justify-between p-4 bg-inherit border-b border-solid border-white'>
        <h1 className='text-3xl sm:text-5xl select-none'>TODO LIST</h1>
        <i className='fa-solid fa-user text-xl duration-300 
        hover:opacity-40 cursor-pointer sm:text-4xl'/>

    </div>
  )
}
