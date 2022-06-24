import React from 'react'
import PrimaryButton from './Buttons/PrimaryButton'
// import { images } from '../constants'

const SendMessage = () => {
  return (
    <div className='bg-white py-2 px-4'>
        <h2>Send Message to Supplier</h2>
        <form className='px-4'>
            <div className='flex items-center py-2'>
                <label htmlFor="email" className='text-sm mr-4'><span className='text-red-600'>*</span>From</label>
                <input type="email" name='email' placeholder="Enter your email address" className='py-2 px-3 border rounded w-full outline-none' />
            </div>
            <div className='flex items-center py-2'>
                <p className='text-sm mx-4'>To</p>
                <div className='h-[40px] w-[40px]'>
                    <img src={'/images/png/png1.jpeg'} alt="" className='w-full h-full object-cover' />
                </div>
                <p className="ml-4 text-neutral-700">Mr Melah</p>
            </div>
            <div className='flex items-start py-2'>
                <label htmlFor="message" className='text-sm mr-4'><span className='text-red-600'>*</span>Message</label>
               <textarea name="message" rows="5" className='border rounded w-full py-2 px-3 text-neutral-400 outline-none'>We suggest you detail your product requirement and details here.</textarea>
            </div>
            <p className="text-neutral-500 text-sm pl-20">Enter between 20 to 4000 characters</p>
            <div className="py-4 w-[270px] p-20 ">
                    <PrimaryButton text="Send" styles="text-sm bg-red-600 text-white" />
            </div>
        </form>
    </div>
  )
}

export default SendMessage