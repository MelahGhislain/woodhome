import React from 'react'
import ContactSupplier from '../../components/ContactSupplier'
import FAQ from '../../components/FAQ'
import NavigationDetails from '../../components/NavigationDetails'
import Recommended from '../../components/Recommended'
import SendMessage from '../../components/SendMessage'
// import { images } from '../../constants'
import Details from './Details'
import ProductItem from './ProductItem'

const recommended = [
  {
    id: 1,
    image: '/images/sofa/sofa.jpeg'
  },
  {
    id: 2,
    image: '/images/couch/couch10.jpeg'
  },
  {
    id: 3,
    image: '/images/chair/chair2.jpeg'
  },
  {
    id: 4,
    image: '/images/chair/chair3.webp'
  },
  {
    id: 5,
    image: '/images/bed/bed7.jpeg'
  },
  {
    id: 6,
    image: '/images/couch/couch7.jpeg'
  },
  {
    id: 7,
    image: '/images/couch/couch5.jpeg'
  },
  {
    id: 8,
    image: '/images/couch/couch4.jpeg'
  },
]


const ProductDetailPage = () => {
  return (
    <section className='bg-gray-100 w-full py-2'>
        <NavigationDetails data={["Product", "Product detail"]} />
        <section className='bg-white w-full flex px-2 py-4'>
            <article className='flex-none w-[270px]'>
                <ProductItem />
            </article>
            <div className='flex-auto w-full mx-4'>
                <Details />
            </div>
            <article className="flex-none w-[240px]">
              <ContactSupplier />
            </article>
        </section>
        
        <section className="py-4 px-2">
          <div className="py-4 ">
            <h2 className="">You Might Also Like</h2>
          </div>
          <Recommended data={recommended}/>
        </section>
        <section>
          <FAQ />
        </section>
        <section className="px-2 py-4 w-full">
          <SendMessage />
        </section>
    </section>
  )
}

export default ProductDetailPage