import Image from 'next/image'
import React, { useState } from 'react'
// import {images} from '../../constants'
import { FaHeart, FaShare} from 'react-icons/fa'
const imagesData = [
    {
        id: 1,
        image: '/images/bed/bed.webp'
    },
    {
        id: 2,
        image: '/images/bed/bed1.jpeg'
    },
    {
        id: 3,
        image: '/images/bed/bed2.jpeg'
    },
    {
        id: 4,
        image: '/images/bed/bed3.png'
    },
    {
        id: 5,
        image: '/images/bed/bed4.jpg'
    },
]

const ProductItem = () => {
    const [display, setDisplay] = useState(imagesData[0])
  return (
    <div className="w-full h-fit">
        <div className='w-full relative'>
            <img src={display.image} layout="fill" objectFit='cover' alt="" className="w-full h-full object-cover" />
        </div>
        <div className='flex items-center space-x-2 my-4'>
            {
                imagesData.map((object, index) =>(
                    <div key={index} onClick={()=>setDisplay(object)} className={`h-[50px] w-[50px] cursor-pointer relative ${object.id === display.id? "border-2 border-red-600": "border"}`}>
                        <Image src={object.image} layout="fill" objectFit='cover' alt="" className="w-full h-full object-cover" />
                    </div>
                ))
            }
        </div>
        <div className='flex items-center text-sm text-slate-500 divide-x-2'>
            <p className='flex items-center pr-2'>
                <FaHeart className='mr-2'/>
                <span>Favorites</span>
            </p>
            <p className='flex items-center pl-2'>
                <FaShare className='mr-2' />
                <span>Share</span>
            </p>
        </div>
    </div>
  )
}

export default ProductItem