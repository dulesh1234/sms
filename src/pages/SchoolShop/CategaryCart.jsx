import React from 'react'
import buds from "/images/buds.webp"

export const CategaryCart = () => {
  return (
    <div className='w-[20%] flex flex-col justify-center items-center shadow rounded-lg p-4 gap-2 '>
        <span className='font-semibold '>School Bags</span>
        <img src={buds} alt="" className='size-32' />
    </div>
  )
}
