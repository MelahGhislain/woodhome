import {useState} from 'react'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

const carousel = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const handleNext = () => {
        if(currentIndex <= images.length -1){
            setCurrentIndex(currentIndex++)
        }else{
            setCurrentIndex(0)
        }
        console.log(currentIndex)
    }
    const handlePrev = () => {
        if(currentIndex > 0){
            setCurrentIndex(currentIndex--)
        }else{
            setCurrentIndex(images.length-1)
        }
        setCurrentIndex(currentIndex--)
        console.log(currentIndex)
    }
  return (
    <div className='relative h-full w-full overflow-hidden flex items-center'>
        
        <div className={`absolute h-full w-full `}>
            <img src={images[currentIndex]} className='h-full w-full object-cover' />
        </div>
        <div className='absolute left-1 text-3xl cursor-pointer  h-full flex items-center' onClick={handlePrev}>
            <FaChevronLeft />
        </div>
        <div className='absolute right-0 text-3xl cursor-pointer h-full flex items-center' onClick={handleNext}>
            <FaChevronRight />
        </div>
    </div>
  )
}

export default carousel