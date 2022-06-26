import Image from 'next/image'
import CategorySection from './CategorySection'
import Heading from '../Heading';
import PopularCard from './PopularCard';
import Carousel from '../Carousel/Carousel'


const HomeSection = () => {
  return (
    <main className='w-full mx-auto'>
        {/* carousel section */}
        <section className='h-[60vh] w-full bg-red-500'>
            <Carousel 
              images={[
                "/images/sofa/sofa.jpeg",
                "/images/sofa/sofa1.jpeg",
                "/images/couch/couch1.jpeg",
                "/images/couch/couch2.jpeg"
              ]}
            />
        </section>
        <section className='bg-gray-100 w-full'>
            <CategorySection />
        </section>
        <section className='flex flex-col items-center py-10'>
          <Heading text="Popular Across Site" />
          <div className='w-3/4 mt-4'>
            <div className='flex'>
                <PopularCard />
                <PopularCard />
                <PopularCard />
            </div>
          </div>
        </section>
    </main>
  )
}

export default HomeSection