import PrimaryButton from './Buttons/PrimaryButton'
import Image from 'next/image'

const ContactSupplier = () => {
  return (
    <div className='border p-4 w-full rounded-sm'>
        <h6>Conatct Supplier</h6>
        <div className='flex items-center'>
            <div className='w-[70px] py-2 h-[70px] relative'>
                <Image src='/images/sofa/sofa.jpeg' layout="fill" objectFit='contain' alt="" className='w-full h-full object-cover'/>
            </div>
            <div className='ml-4 text-sm'>
                <p>Mr Melah</p>
                <p className="text-neutral-400">Sales Manager</p>
            </div>
        </div>
        <PrimaryButton text="Contact Now" styles="bg-red-500 text-white text-sm" />
        <PrimaryButton text="Chat With Supplier" styles=" text-blue-500 text-sm bg-gray-100" />
    </div>
  )
}

export default ContactSupplier