import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-[#A3CB56] text-white">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">
        <img src="/logo.png" className="w-full h-full"/>
      </a>
    </div>
    <div className="flex items-center gap-3">
      <div className="flex flex-col items-end justify-center">
        <span className="font-bold text-xl">Jason Mamoa</span><span>Admin</span>
      </div>
      <div className="w-[4rem] aspect-square rounded-full bg-gray-300"></div>
    </div>
  </div>
  )
}

export default Navbar
