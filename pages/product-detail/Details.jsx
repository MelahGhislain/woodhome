import React from 'react'
import { FaShoppingBasket } from 'react-icons/fa'

const Details = () => {
  return (
    <div>
        <h6>4-5 star Custom made Morden Design Living Room Furniture</h6>
        <div className='bg-gray-200 p-2 my-2'>
            <p className='flex items-center text-sm text-neutral-500'>Reference FOB Price <div className='h-[15px] w-[15px] rounded-full bg-blue-600 text-white text-xs ml-2 flex items-center justify-center'>i</div></p>
            <div className="bg-white px-2 py-3 my-2 flex items-center justify-between">
                <div className='divide-x-2 divide-gray-400 flex items-center'>
                  <div className='flex items-center'>
                    <h6 className="text-red-700 mr-2">US $120-200</h6>
                    <p className="text-neutral-500 text-sm pr-4">/ price</p>
                  </div>
                  <div className="px-2 text-neutral-600">
                    <span>10 In Stock</span>
                  </div>
                </div>
                <div className='flex items-center text-sm text-red-600 cursor-pointer'>
                  <span>Add to Cart</span>
                  <FaShoppingBasket className='ml-2' />
                </div>
            </div>
        </div>
        <div className='py-2 border-t border-b'>
          <ul className='w-[60%]'>
            <li className='text-sm py-2 grid grid-cols-2 items-center'> 
              <span className="text-neutral-500 ">Style: </span>
              <span className="text-neutral-800 ">Morden</span>
            </li>
            <li className='text-sm py-2 grid grid-cols-2 items-center'>
              <span className="text-neutral-500 ">Material: </span>
              <span className="text-neutral-800 ">Fabric</span>
            </li>
            <li className='text-sm py-2 grid grid-cols-2 items-center'>
              <span className="text-neutral-500 ">Folded: </span>
              <span className="text-neutral-800 ">Unfolded</span>
            </li>
            <li className='text-sm py-2 grid grid-cols-2 items-center'>
              <span className="text-neutral-500 ">Customized: </span>
              <span className="text-neutral-800 ">Customized</span>
            </li>
            <li className='text-sm py-2 grid grid-cols-2 items-center'>
              <span className="text-neutral-500 ">Condition: </span>
              <span className="text-neutral-800 ">New</span>
            </li>
            <li className='text-sm py-2 grid grid-cols-2 items-center'>
              <span className="text-neutral-500 ">Wood Style: </span>
              <span className="text-neutral-800 ">Solid Wood</span>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Details