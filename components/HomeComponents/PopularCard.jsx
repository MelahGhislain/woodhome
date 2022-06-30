import React from 'react'

const PopularCard = ({width, height, data}) => {
  return (
    <div className={`flex flex-col border rounded overflow-hidden shadow transition-all duration-300 hover:scale-105 ${width || "w-[270px]"} ${height|| "h-[300px]"}`}>
        <div className='flex-auto w-full'>
            <img src={data.image} alt="" className='w-full h-full object-cover ' />
        </div>
        <div className="flex-non flex flex-col items-center py-4 px-2">
            <h6 className='text-gray-800'>Thorpe upherstard storage bed</h6>
            <p className='text-gray-400 text-sm'>(Queen bed size)</p>
            <p className="text-sm text-gray-600"><span className='text-gray-400 line-through'>$149.50</span> <span>$199.50</span></p>
        </div>
    </div>
  )
}

export default PopularCard