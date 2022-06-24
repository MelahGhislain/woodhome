import React from 'react'

const PrimaryButton = ({text, styles, onClick}) => {
  return (
    <button onClick={onClick} className={`w-full text-center py-2 border mb-2 rounded transition-all duration-300 hover:scale-95 ${styles}`}>
        {text}
    </button>
  )
}

export default PrimaryButton