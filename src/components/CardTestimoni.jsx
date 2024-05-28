import React from 'react'

function CardTestimoni({ image, text, name }) {
  return (
    <div className="md:w-[48%] w-full h-[150px] bg-[#FFF4F4] shadow-lg rounded-md mr-2 mb-2 flex hover:bg-slate-50">
      <div className="md:w-[20%] w-[30%] h-full p-3 flex items-center justify-center">
        <img src={`/img/${image}`} alt="" className='w-[100px] h-[100px] rounded-full' />

      </div>
      <div className='md:w-[80%] w-[70%] h-full p-3 overflow-hidden flex justfiy-center flex-col'>
        <p className='font-bold mb-2'>{name}</p>
        <p className='text-sm overlow-hidden'>{text}</p>
      </div>

    </div>)
}

export default CardTestimoni