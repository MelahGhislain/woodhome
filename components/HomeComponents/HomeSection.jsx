import Image from 'next/image'
import CategorySection from './CategorySection'
import Heading from '../Heading';
import PopularCard from './PopularCard';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import {default as Slider}   from 'framer-motion-carousel';
import CustomerCard from './CustomerCard';
import PrimaryButton from '../Buttons/PrimaryButton';


const HomeSection = () => {
 
  return (
    <main className='w-full mx-auto'>
        {/* carousel section */}
        <section className='h-[60vh] w-full '>
            <Slider interval={5000} renderDots={()=>null} >
              <div className="w-full h-full">
                <img src="/images/png/png1.png" alt="" className='w-full h-full object-contain'/>
              </div>
              <div className="w-full h-full">
                <img src="/images/png/png2.png" alt="" className='w-full h-full object-contain' />
              </div>
              <div className="w-full h-full">
                <img src="/images/png/png3.png" alt="" className='w-full h-full object-contain' />
              </div>
              <div className="w-full h-full">
                <img src="/images/png/png4.png" alt="" className='w-full h-full object-contain' />
              </div>
              <div className="w-full h-full">
                <img src="/images/png/png10.png" alt="" className='w-full h-full object-contain' />
              </div>
              
            </Slider>
        </section>
        <section className='bg-gray-100 w-full'>
            <CategorySection />
        </section>
        <section className='flex flex-col items-center py-10'>
          <Heading text="Popular Across Site" />
          <div className='w-3/4 mt-4 h-[20rem] flex justify-between bg-red-500' >
            {/* <Swiper > */}
              <div className=" w-[180px]">
                <PopularCard
                  data={{image: "/images/sofa/sofa1.jpeg"}}
                 />
              </div>
              <div className=" w-[180px]">
                <PopularCard 
                  data={{image: "/images/couch/couch12.jpeg"}}
                />
              </div>
              <div className=" w-[180px]">
                <PopularCard 
                  data={{image: "/images/sofa/sofa.jpeg"}}
                />
              </div>
            {/* </Swiper> */}
          </div>
        </section>
         <section className='w-full py-4'>
          <Heading text="Customers Stories" />
          <div className='flex justify-center items-center flex-col md:flex-row'>

            <div className='mx-4 my-4 w-[320px]'>
              <CustomerCard 
                data={{
                  image: '/images/couch/couch4.jpeg',
                  profile: '/images/png/png1.png',
                  name: "Mary Doe",
                  category: "Sofa",
                  description: "Having beautiful furniture in your home is not about mordinity Having beautiful furniture in your home is not about mordinity"
                
                }}
              />
            </div>

            <div className='mx-4 my-4 w-[320px] '>
              <CustomerCard 
                data={{
                  image: '/images/bed/bed2.jpeg',
                  profile: '/images/png/png2.png',
                  name: "Jane Doe",
                  category: "Family Bed",
                  description: "Having beautiful furniture in your home is not about mordinity Having beautiful furniture in your home is not about mordinity"
                
              }}
              />
            </div>

            <div className='mx-4 my-4 w-[320px]'>
              <CustomerCard 
                data={{
                  image: '/images/chair/chair.jpeg',
                  profile: '/images/png/png3.png',
                  category: "Chiar",
                  name: "Jane Doe",
                  description: "Having beautiful furniture in your home is not about mordinity Having beautiful furniture in your home is not about mordinity"
                
              }}
              />
            </div>

          </div>
          <div className='flex items-center justify-center py-6'>
            <span className='w-[270px]'>
              <PrimaryButton text="VIEW ALL CUSTOMER STORIES" styles="text-sm text-teal-500 border-teal-500" />
            </span>
          </div>
        </section>
    </main>
  )
}

export default HomeSection