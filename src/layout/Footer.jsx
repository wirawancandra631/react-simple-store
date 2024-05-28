import React from 'react'
import { CiFacebook,CiInstagram  } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full p-3 bg-[#000000]">
    <div className="w-full md:p-8 p-4 md:flex justify-between items-center">
      <div className="">
        <p className="text-white font-semibold">Hubungi kami</p>
        <ul className="text-slate-100 mt-4 text-sm">
          <li className='flex space-x-2 items-center'><CiFacebook/><span>Facebook</span></li>
          <li className="my-4 flex space-x-2 items-center"><CiInstagram/><span>Instagram</span></li>
          <li className='items-center flex space-x-2 '><FaWhatsapp/><span>Whatsapp</span></li>
        </ul>
      </div>
      <span className="text-white text-sm md:mt-0 mt-4 block">
        <a href="">Jl Raya kampung rambutan ,Jakarta selatan</a>
      </span>
    </div>
    <p className="text-center text-white font-semibold mb-4 md:text-md text-sm">
      CopyRight &copy; BY React Store @2024
    </p>
  </footer>
  )
}

export default Footer