import React from 'react'
import { Poppins } from "next/font/google"

const poppins = Poppins({
  weight: ['400', "100", "200", "300", "500", "600", "700", "800", "900"],
  subsets: ['latin'],
})

const Navbar = () => {
  return (
    <div className={`navbar bg-white border-b h-[4.3rem] border-b-[#C8CBD9] pr-[2.25rem] ${poppins.className}`}>
      <div className="flex-1">

      </div>
      <div className="flex items-center gap-3">
        <div className="w-[3rem] aspect-square rounded-full bg-gray-300"></div>
        <div className="flex flex-col items-start justify-center">
          <span className="font-bold ">Jason Mamoa</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
