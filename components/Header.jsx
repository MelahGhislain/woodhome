import Link from 'next/link'
import TextWithIcon from './Buttons/TextWithIcon'
import {FaShoppingCart, FaHeart, FaTruck, FaPersonBooth} from 'react-icons/fa'
import NavBar from './NavBar'
import Search from './Search'
import IconWidget from './IconWidget'


const Header = ({navBar = true}) => {
  return (
    <header className='flex flex-col w-full divide-y-2 divide-neutral-100'>
        <div className='w-full flex justify-end px-4 items-end py-2 '>
            <div className="flex items-center space-x-4">
                <Link href="/" >
                    <a className='text-sm text-blue-500 transition-all duration-300 ease-in-out hover:text-blue-800'>Sign in</a>
                </Link>
                <TextWithIcon text="English" />
            </div>
        </div>
        <div className='w-full flex justify-between px-24 items-center py-4 '>
           <div className="flex-none">Logo</div>
           <div className='flex-auto mx-8'>
            <Search styles={'bg-teal-500'} />
           </div>
           <div className="flex-none flex items-center space-x-6">
                <Link href="/">
                    <a className="flex items-center text-gray-700">
                        <IconWidget>
                            <FaTruck className='text-lg text-black/60 transition-all duration-300 hover:scale-105'/>
                        </IconWidget>
                    </a>
                </Link>
                <Link href="/">
                    <a className="flex items-center text-gray-700 transition-all duration-300 hover:scale-105">
                        <IconWidget>
                            <FaPersonBooth className='text-lg text-black/60'/>
                        </IconWidget>
                    </a>
                </Link>
                <Link href="/">
                    <a className="flex items-center text-gray-700 transition-all duration-300 hover:scale-105">
                        <IconWidget data={0}>
                            <FaHeart className='text-lg text-black/60' />
                        </IconWidget>
                    </a>
                </Link>
                <Link href="/">
                    <a className="flex items-center text-gray-700 transition-all duration-300 hover:scale-105">
                        <IconWidget data={0}>
                            <FaShoppingCart className='text-lg text-black/60' />
                        </IconWidget>
                    </a>
                </Link>
                
                
           </div>
           {/* <div className="w-[40%]">
           </div> */}
        </div>
        {navBar ?
            <div className="w-full">
                <NavBar />
            </div> : null
        }
    </header>
  )
}

export default Header