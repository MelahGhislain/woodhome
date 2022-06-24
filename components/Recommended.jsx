import Image from 'next/image'
import React from 'react'

const Recommended = ({data}) => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-2">
        {
            data.map((data, index)=>(
                <div key={index} className="w-full cursor-pointer overflow-hidden relative">
                    <img src={data.image} layout="fill" objectFit='contain' className='w-full h-full object-fit transition-all duration-300 hover:scale-105'/>
                </div>
            ))
        }
    </div>
  )
}

export default Recommended