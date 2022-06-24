import React from 'react'
import NavigationDetails from '../../components/NavigationDetails'
import SendMessage from '../../components/SendMessage'
import ContactDetail from './ContactDetail'

const ContactSection = () => {
  return (
    <div className='bg-gray-100 w-full pb-8 px-8'>
        <NavigationDetails data={["Contact Us"]} />
        <section className='bg-white'>
            <div className='w-[70%]'>
                <SendMessage />
            </div>
        </section>
        <section className='bg-white mt-6'>
            <ContactDetail />
        </section>
    </div>
  )
}

export default ContactSection