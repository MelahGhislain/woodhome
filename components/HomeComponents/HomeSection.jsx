import Image from 'next/image'
import CategorySection from './CategorySection'
import { Carousel } from 'react-responsive-carousel';
import Heading from '../Heading';
import PopularCard from './PopularCard';


const HomeSection = () => {
  return (
    <main className='w-full mx-auto'>
        {/* carousel section */}
        <section className='h-[60vh] w-full bg-red-500'>
            <Carousel >
              <img src="/images/sofa/sofa.jpeg" className='h-full w-full object-cover' />
              <img src="/images/sofa/sofa1.jpeg" className='h-full w-full object-cover' />
              <img src="/images/couch/couch1.jpeg" className='h-full w-full object-cover' />
              <img src="/images/couch/couch2.jpeg" className='h-full w-full object-cover' />
            </Carousel>
        </section>
        <section className='bg-gray-100 w-full'>
            <CategorySection />
        </section>
        <section className='flex flex-col items-center py-10'>
          <Heading text="Popular Across Site" />
          <div className='w-3/4 mt-4'>
            <div className=''>
              <Carousel >
                <PopularCard />
                <PopularCard />
                <PopularCard />
              </Carousel>
              
            </div>
          </div>
        </section>
    </main>
  )
}

export default HomeSection