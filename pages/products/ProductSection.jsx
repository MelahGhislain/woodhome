import React, { useState } from 'react'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import CardItem from '../../components/CardItem'

const cardItems = [
  {
    image: '/images/couch/couch1.jpeg',
    title: '4-5 start Custom made Morden Design Living Room Furniture Design',
    price: "120-500",
    pieces: "10"
  },
  {
    image: '/images/couch/couch2.jpeg',
    title: '4-5 start Custom made Morden Design Living Room Furniture',
    price: "120-500",
    pieces: "10"
  },
  {
    image: '/images/couch/couch3.jpeg',
    title: '4-5 start Custom made Morden Design Living Room Furniture',
    price: "120-500",
    pieces: "10"
  },
  {
    image: '/images/couch/couch4.jpeg',
    title: '4-5 start Custom made Morden Design Living Room Furniture',
    price: "120-500",
    pieces: "10"
  },
  {
    image: '/images/couch/couch5.jpeg',
    title: '4-5 start Custom made Morden Design Living Room Furniture',
    price: "120-500",
    pieces: "10"
  },
  {
    image: '/images/couch/couch6.jpeg',
    title: '4-5 start Custom made Morden Design Living Room Furniture',
    price: "120-500",
    pieces: "10"
  },
  {
    image: '/images/couch/couch7.jpeg',
    title: '4-5 start Custom made Morden Design Living Room Furniture',
    price: "120-500",
    pieces: "10"
  },
  {
    image: '/images/couch/couch8.jpeg',
    title: '4-5 start Custom made Morden Design Living Room Furniture',
    price: "120-500",
    pieces: "10"
  },
  {
    image: '/images/couch/couch9.jpeg',
    title: '4-5 start Custom made Morden Design Living Room Furniture',
    price: "120-500",
    pieces: "10"
  },
  {
    image: '/images/couch/couch10.jpeg',
    title: '4-5 start Custom made Morden Design Living Room Furniture',
    price: "120-500",
    pieces: "10"
  },
  {
    image: '/images/couch/couch11.jpeg',
    title: '4-5 start Custom made Morden Design Living Room Furniture',
    price: "120-500",
    pieces: "10"
  },
  {
    image: '/images/couch/couch12.jpeg',
    title: '4-5 start Custom made Morden Design Living Room Furniture',
    price: "120-500",
    pieces: "10"
  },
  {
    image: '/images/sofa/sofa.jpeg',
    title: '4-5 start Custom made Morden Design Living Room Furniture',
    price: "120-500",
    pieces: "10"
  },
]
const pageNum  = 5;


const ProductSection = () => {
  const [cardData, setCardData] = useState(cardItems)
  const [pagination, setPagination] = useState(1)

  const handleNext = () => {
    if(pagination < pageNum){
      setPagination(state => state+1)
    }
  }
  const handlePrev = () => {
    if(pagination > 1){
      setPagination(state => state-1)
    }
  }

  return (
      <div>
        <div className="flex items-center justify-between  px-4 py-2 border-b">
            <div className='flex items-center'>
              <h6>Hotel Bedroom Furnitures</h6>
              <p className='text-sm text-slate-500 ml-2'>Total 104 Hotel Bedroom Furnitures products</p>
            </div>
            <div className='flex items-center '>
              <span className='text-slate-500 text-sm mr-4 '>1/5</span>
              <div className="text-xs flex items-center border rounded-sm divide-x text-slate-500">
                <span className={`flex items-center justify-center py-2 px-3 cursor-pointer bg-gray-100 text-slate-300`}><FaChevronLeft /></span>
                <span className={`flex items-center justify-center py-2 px-3 cursor-pointer`}><FaChevronRight /></span>
              </div>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {
            cardData.map((data, index)=>(
              <CardItem key={index} data={data} />
            ))
          }
        </div>
        <div className="flex items-center justify-end px-4 py-4 border-t ">
          <div className="text-xs flex items-center text-slate-500">
              <span onClick={handlePrev} className={`mr-1 flex items-center border rounded-sm justify-center py-2 px-3 cursor-pointer ${pagination === 1? "bg-gray-100 text-slate-300" : "bg-red-700 text-white"}`}><FaChevronLeft className='mr-1'/><span className={`${pagination === 1? "hidden" : null}`}>Prev</span></span>
              <ul className="flex items-center">
                {
                  Array.from(Array(pageNum + 1).keys()).slice(1).map((page, index)=>(
                    <li key={index} onClick={()=> setPagination(page)} className={`flex items-center mx-1 rounded-sm justify-center py-2 px-3 cursor-pointer ${pagination === page? "text-red-500": "bg-gray-100 border"}`}>{page}</li>
                  ))
                }
              </ul>
              <span onClick={handleNext} className={`ml-1 flex items-center rounded-sm justify-center py-2 px-3 cursor-pointer ${pagination === pageNum? "bg-gray-100 text-slate-300" : "bg-red-700 text-white"}`}> <span className={`${pagination === pageNum? "hidden" : null}`}>Next</span> <FaChevronRight  className='ml-1'/></span>
          </div>
        </div>
      </div>
  )
}

export default ProductSection