import PrimaryButton from './Buttons/PrimaryButton'
import  Image from 'next/image'
import Link from 'next/link'

const CardItem = ({data}) => {
  // const router = useRouter()
    const LENGTH = 60
    const handleClick = ()=> {
      // router.push("/product-detail")
    }
  return (
    <div className="px-4 w-full border">
       <div className='py-2 w-full h-[150px] overflow-hidden'>
         <Link href='/product-detail'>
           <a >
            <img src={data.image} alt="" className='w-full h-full object-cover transition-all duration-300 hover:scale-105' />
           </a>
         </Link>
       </div>
       <div className='text-sm '>
           <p className='font-bold py-1'>{data.title.slice(0, LENGTH)} {data.title.length > LENGTH? "...": null}</p>
           <p className='text-slate-500'>FOB Price: <span className='text-red-700'> US ${data.price}</span> /piece</p>
           <p className='py-2 text-slate-500'>In Stock: {data.pieces} pieces</p>
       </div>
       <PrimaryButton onClick={handleClick} text="Contact Now" styles={'bg-gray-100 text-sm'} />
    </div>
  )
}

export default CardItem