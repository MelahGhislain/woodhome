import React, { useState } from 'react'
import PrimaryButton from '../Buttons/PrimaryButton'

const CustomerCard = ({data}) => {
    const [more, setMore] = useState(false)
  return (
    <div className="px-4 w-full border flex items-center flex-col py-4">
        <div className='h-[70px] w-[70px] rounded-full overflow-hidden bg-gray-100'>
            <img src={data.profile} alt="" className='w-full h-full object-contain transition-all duration-300 hover:scale-105' />
        </div>
        <p className='py-4 font-bold'>{data.name.toUpperCase()}</p>
        <div className='py-2 w-full h-[200px] overflow-hidden'>
            <img src={data.image} alt="" className='w-full h-full object-contain transition-all duration-300 hover:scale-105' />
        </div>
        <p className='py-4'>{data.category}</p>
        <div>
            <PrimaryButton text="VIEW PRODUCT" styles='px-4 bg-teal-500 text-white border-teal-500 text-sm'/>
        </div>
        <blockquote className='text-gray-400 text-sm pt-2'>
            {!more && (data.description.length <= 80? data.description : data.description.slice(0, 80) + " ...")}
            {more && data.description}
        </blockquote>
        <p className='w-full text-left text-teal-600 cursor-pointer text-sm' onClick={()=>setMore(!more)}>{more? "less" : "more"}</p>
       
    </div>
  )
}

export default CustomerCard