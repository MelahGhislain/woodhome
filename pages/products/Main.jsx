import React from 'react'
import ContactSupplier from '../../components/ContactSupplier'
import NavigationDetails from '../../components/NavigationDetails'
import ProductSection from './ProductSection'
import ProductSideBar from './ProductSideBar'

const MainSection = () => {
  return (
    <section className='bg-gray-100 w-full pb-8 px-8'>
        <NavigationDetails data={["Product Page"]} />
        <div className='flex w-full mt-4'>
            <article className='flex-none w-[270px] mr-4 py-2 px-4 bg-white h-fit'>
                <ProductSideBar />
                <div className='p-4 bg-gray-100 '></div>
                <ContactSupplier />
            </article>
            <section className='flex-auto w-full bg-white'>
                <ProductSection />
            </section>
        </div>
    </section>
  )
}

export default MainSection