import React from 'react'
import { FaSearch, FaFilter} from 'react-icons/fa'

const Search = ({styles, filter=false}) => {
  return (
    <div className='flex items-center'>
      <form className={`w-full flex items-center ${styles} `}>
          <input type="text" className='flex-1 outline-none border px-2 py-1 w-full' placeholder='search product' />
          <button type='submit' className="flex-none px-4 text-white"><FaSearch /></button>
      </form>
     {filter? <div className='ml-2'>
        <button className='px-3 py-2 border rounded'><FaFilter className='text-sm text-neutral-500'/></button>
      </div> : null}
    </div>
  )
}

export default Search