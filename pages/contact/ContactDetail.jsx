import React from 'react'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import ContactSupplier from '../../components/ContactSupplier'

const ContactDetail = () => {
  return (
    <div className='flex '>
        <div className='flex-auto py-2 px-2 '>
            {/* Contact Header */}
            <div className="flex items-center justify-between py-2">
                <h6>Contact Details</h6>
                <div className='flex items-center text-sm text-neutral-400'>
                    <div className='flex items-center cursor-pointer transition-all duration-300 hover:text-red-600'>
                        <span><FaShoppingCart className='mr-2'/></span>
                        <p>Inquire Basket</p>
                    </div>
                    <div className='flex items-center ml-4 cursor-pointer transition-all duration-300 hover:text-red-600'>
                        <span><FaHeart className='mr-2' /></span>
                        <p>Company Favorites</p>
                    </div>
                </div>
            </div>
            {/* Address */}
            <div className='items-center py-2 text-sm w-[60%]'>
                <span className="text-neutral-600">Address: </span>
                <span className=''>Ndopassi, Douala, Littoral, Cameroon</span>
            </div>
            {/* Local Time */}
            <div className='items-center py-2 text-sm w-[60%]'>
                <span className="text-neutral-600">Local Time: </span>
                <span className=''>3 : 35PM Tue June 2</span>
            </div>
            {/* contact */}
            <div className='p-4 bg-gray-100 w-[40%]'>
                <ul className="text-neutral-500 text-sm">
                    <li className='py-2'>
                        Telephone: (+237) 675-909-367
                    </li>
                    <li>
                        Email: melahghislain@gmail.com
                    </li>
                </ul>
            </div>
        </div>
        <div className='flex-none w-[250px]'>
            <ContactSupplier />
        </div>
    </div>
  )
}

export default ContactDetail