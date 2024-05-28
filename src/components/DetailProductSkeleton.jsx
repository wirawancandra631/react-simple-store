import React from 'react'

function DetailProductSkeleton() {
  return (
    <div className="w-full  md:min-h-[500px] bg-slate-200 shadow-md flex md:flex-nowrap flex-wrap">
    <div className="md:w-[40%] w-full md:p-8 ">
      <div className="w-full h-[300px] bg-slate-300"></div>

      <div className="md:w-[80%] w-full md:mx-auto flex md:mt-4 md:justify-between md:p-0 p-2 md:space-x-0 space-x-2"></div>
    </div>
    <div className="md:w-[60%] w-full md:p-8 p-4 ">
      <p className="md:text-3xl mb-4 font-semibold p-2 bg-slate-300"></p>
      <div className="flex space-x-4 mb-4">
        <button className="px-2 py-1.5 bg-slate-300 text-white rounded-md shadow-xl text-sm"></button>
        <button className="px-2 py-1.5 bg-slate-300 text-white rounded-md shadow-xl text-sm"></button>
      </div>
      <div className="w-full md:text-md text-sm">
        <ul className="mb-4">
          <li className="p-2 bg-slate-300"></li>
        </ul>
        <p className="mb-4 p-2 bg-slate-300"></p>
        <p className="p-2 bg-slate-300"></p>
      </div>
    </div>
  </div>  )
}

export default DetailProductSkeleton