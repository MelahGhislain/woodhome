import { useState } from 'react'
import {FaList} from 'react-icons/fa'
import Link from 'next/link'

const navItems = [
    {link: "/", title: "home"},
    {link: "/products", title: "products"},
    {link: "/about", title: "about"},
    {link: "/contact", title: "contact"},
    {link: "/faq", title: "faq"},
]

const NavBar = () => {

  return (
    <div className='w-full flex items-center justify-center'>
        {navItems.map((nav, index) => (
            <NavItem key={index} nav={nav} />
        ))}
    </div>
  )
}

const NavItem = ({nav}) => {

    const [selected, setSelected] = useState('home')
    console.log(selected)

    return (
        <Link href={nav.link}>
            <a onClick={()=>setSelected(nav.title)}  className={`text-sm flex items-center py-3 px-5 ${selected === nav.title? "bg-teal-500 text-white" : null}`}>  
                {nav.title === 'products'? <FaList className='text-xs mr-2 text-center' /> : null}
                <span>{nav.title.toUpperCase()}</span>
            </a>
        </Link>
    )
}

export default NavBar