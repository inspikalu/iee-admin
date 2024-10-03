import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-white border-b-[.3rem] border-b-[#E8E9ED] pr-[2.25rem]">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">
        {/* <img src="/logo.jpeg" alt='Logo' className="w-full h-full"/> */}
        <Image src={'/logo.jpeg'} alt='Logo' width={100} height={20}/>
      </a>
    </div>
    <div className="flex items-center gap-3">
      <div className="w-[3rem] aspect-square rounded-full bg-gray-300"></div>
      <div className="flex flex-col items-start justify-center">
        <span className="font-bold text-xl">Jason Mamoa</span><span>Admin</span>
      </div>
    </div>
  </div>
  )
}

export default Navbar
