import {FaFacebook, FaTwitter, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full '>
        <div className='py-4'>
            <div className='grid grid-cols-2 md:grid-cols-4 grid-rows-4'>
                {/* funi.com */}
                <div className='col-span-1 row-span-4 flex flex-col px-8'>
                        <h2>FURNI.COM</h2>
                        <p className='py-4 leading-8'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            
                        </p>
                        <div className='flex items-center'>
                            <span className='border border-neutral-700 p-1 mx-1 transition duration-300 ease-in-out hover:scale-105 cursor-pointer'><FaFacebook /></span>
                            <span className='border border-neutral-700 p-1 mx-1 transition duration-300 ease-in-out hover:scale-105 cursor-pointer'><FaTwitter /></span>
                            <span className='border border-neutral-700 p-1 mx-1 transition duration-300 ease-in-out hover:scale-105 cursor-pointer'><FaGithub /></span>
                            <span className='border border-neutral-700 p-1 mx-1 transition duration-300 ease-in-out hover:scale-105 cursor-pointer'><FaInstagram /></span>
                            <span className='border border-neutral-700 p-1 mx-1 transition duration-300 ease-in-out hover:scale-105 cursor-pointer'><FaLinkedin /></span>
                        </div>
                </div>
                {/* Services */}
                <div className='col-span-1 row-span-4 flex flex-col px-8'>
                        <h2 className='pb-4'>Services</h2>
                        <ul>
                            <li className='pb-2'>Product</li>
                            <li className='pb-2'>Help & Support</li>
                            <li className='pb-2'>Pricing</li>
                            <li className='pb-2'>FAQ</li>
                        </ul>
                </div>
                
                {/* product */}
                <div className='mt-12 md:mt-0 col-span-1 row-span-4 flex flex-col px-8'>
                        <h2 className='pb-4'>Product</h2>
                        <ul>
                            <li className='pb-2'>Sofa's</li>
                            <li className='pb-2'>Chair's</li>
                            <li className='pb-2'>Living Room</li>
                            <li className='pb-2'>Office</li>
                        </ul>
                </div>
                {/* contact */}
                <div className='mt-12 md:mt-0 col-span-1 row-span-4 flex flex-col px-8'>
                        <h2 className='pb-4'>Contact Us</h2>
                        <ul>
                            <li className='pb-2'>1203, Fake Street</li>
                            <li className='pb-2'>FL 5766, LA CAM</li>
                            <li className='pb-2'>Phone: +(237) 675-909-367</li>
                            <li className='pb-2'>Email: melahghislain17@gmail.com</li>
                        </ul>
                </div>
            </div>
        </div>
        <div className='bg-neutral-700 w-full text-white'>
            <div className='px-8 lg:px-28'>
                <p>&copy; Copyright 2022. All Right Reserved. Designed and Development by Kawsar Ahmed</p>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Footer