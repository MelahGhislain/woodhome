import React from 'react'

const Heading = ({text}) => {
  return (
      <div className='flex items-center flex-col'>
        <h6 className=' text-3xl text-gray-800 font-bold pb-2'>{text}</h6>
        <div className='w-[80px] py-[1px] bg-teal-500'></div>
      </div>
  )
}

export default Heading