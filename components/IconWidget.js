import React from 'react'

const IconWidget = ({children, data, styles }) => {
  return (
    <div className='relative '>
        {children}
        <span className={`absolute -top-2 -right-3 px-1 bg-gray-400 text-xs rounded ${styles || "text-white "}`} >{data}</span>
    </div>
  )
}

export default IconWidget