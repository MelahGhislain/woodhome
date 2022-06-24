import React from 'react'
import {FaChevronRight} from 'react-icons/fa'

const NavigationDetails = ({data}) => {
  return (
    <span className='text-sm text-neutral-600 flex items-center py-4 px-8'>
        {
            data.map((text, index)=>(
                <>
                    <span className={`${index === data.length - 1 ? "text-slate-400": null}`}>{text}</span> {index < data.length - 1 ? <span className='text-xs mx-2 text-slate-400'><FaChevronRight /></span> : null}
                </>
            ))
        }
    </span>
  )
}

export default NavigationDetails