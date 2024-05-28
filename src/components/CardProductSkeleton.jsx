import React from 'react'
import { Link } from 'react-router-dom'
function CardProductSkeleton() {
  return (
    <div className="md:w-[18%] w-[47%] md:min-h-[300px] min-h-[250px] bg-slate-100 shadow-lg overflow-hidden rounded-md mr-2 mb-2">
        <div className="w-full md:h-[250px] h-[200px] bg-slate-200"></div>
   
    <div className="w-full  p-4">
      <p className="md:font-semibold mb-2 md:text-md bg-slate-200 p-2 w-full"></p>
      <p className="text-gray-800 mb-2 md:text-md text-sm p-2 w-full bg-slate-200"></p>
      <Link
        to={``}
        className="md:w-[100px] w-[100px] p-2 bg-slate-200 md:text-sm text-[10px]  text-white block ml-auto text-center rounded-xl hover:shadow-xl"
      >
   
      </Link>
    </div>
  </div>  )
}

export default CardProductSkeleton