import React from 'react'

function CartProductSkeleton() {
  return (
    <div className="w-full h-[150px] bg-slate-200 flex mb-4 overflow-hidden rounded-md">
    <div className="h-full md:w-[10%] w-[30%] bg-slate-300"></div>
    <div className="md:w-[90%] w-[70%] p-4 flex flex-col justify-between">
      <p className="mb-2 font-bold p-2  bg-slate-300"></p>
      <p className="mb-2 font-bold p-2  bg-slate-300"></p>
      <div className="w-full flex">
        <button className="md:px-4 md:py-1.5 p-1 bg-slate-300 w-[100px] text-white text-sm mr-2 rounded-md"></button>
        <button className="md:px-4 md:py-1.5 p-1 bg-slate-300 w-[100px] text-white text-sm rounded-md"></button>
      </div>
    </div>
  </div>  )
}

export default CartProductSkeleton