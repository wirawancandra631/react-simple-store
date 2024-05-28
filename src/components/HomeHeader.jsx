import React from 'react'
import { Link } from 'react-router-dom'

function HomeHeader() {
  return (
    <header className="w-full md:h-[600px] h-[300px] bg-[#E9CECE] md:pt-10 flex">
      <div className="md:w-[60%] w-full  h-full md:p-8 p-4 flex justify-center flex-col">
        <h1 className="md:text-[5em] text-3xl font-bold  md:mb-8 mb-2 font-[Libre Baskerville, serif]">The React Store</h1>
        <p className="md:text-xl text-sm " >
          Situs yang menawarkan beragam produk fashion, dimulai dari baju
          sampai dengan jam tangan dan aksesoris lain
        </p>
        <Link to={"/product"}
          href=""
          className="md:max-w-[200px] max-w-[150px] text-center  md:mt-4 mt-2 md:px-4 md:py-2.5 p-2 bg-slate-900 text-white rounded-md shadow-md hover:bg-slate-800 md:text-md text-sm"
        >
          Lihat semua produk
        </Link>
      </div>
      <div className="md:w-[40%] w-[30%] h-full flex  justify-center md:block hidden">
        <img
          src="/img/header.png"
          alt=""
          className="md:w-[90%] md:h-[90%] w-[90%] h-[85%] "
        />
      </div>
    </header>)
}

export default HomeHeader