import React, { useState } from 'react'
import {FaChevronDown, FaChevronUp} from 'react-icons/fa'

const TextWithIcon = ({text}) => {
    const [clicked, setClicked] = useState(false)
  return (
    <button className='text-sm flex-none flex items-center' onClick={()=>setClicked(!clicked)}>
        <span className='mr-1'>{text}</span>
        {clicked? <FaChevronUp /> : <FaChevronDown />}
    </button>
  )
}

export default TextWithIcon