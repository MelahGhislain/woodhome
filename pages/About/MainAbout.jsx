import React from 'react'
import NavigationDetails from '../../components/NavigationDetails'
import SendMessage from '../../components/SendMessage'

const MainAbout = () => {
  return (
    <div className='bg-gray-100 w-full pb-8 px-8'>
        <NavigationDetails data={["About Us"]} />
        <section className='bg-white'>
            <div className='w-[70%]'>
                <SendMessage />
            </div>
        </section>
        {/* <section className='bg-white mt-6'>
            
        </section> */}
    </div>
  )
}

export default MainAbout