
const faqs = [
    {
        question: "What is the delivery time?",
        answer: "Our delivery time is about 30-45 days after recieving the 30% deposit."
    },
    {
        question: "Can our company make customise furnitures?",
        answer: "Yes we can customized furniture according to pictures privided by client. The material, color, fabric can be changed as per your requests."
    },
    {
        question: "What's your payment term?",
        answer: "Our payment term is 30% deposit, 70% balance must be paid before shipment."
    },
    {
        question: "Can you guarantee your products?",
        answer: "Yes we guarantee 100% satisfaction on all our products. We have more than 10 years experienced worker."
    },
    {
        question: "How can i know the completion of my order?",
        answer: "Upon reciept of your 30% deposit, we will immediately arrange for the production. After recieving the rest 70% balance. We will prepare to deliver the good"
    },
]

const FAQ = () => {
  return (
    <div className='px-2 bg-white py-4'>
        <h2 className='text-red-800'>FAQ:</h2>
        <div className='text-sm'>
            {
                faqs.map((data, index)=>(
                    <div key={index} className='py-2'>
                        <p className='text-black'>Q{index+1}: {data.question}</p>
                        <p className="text-neutral-500">A{index+1}: {data.answer}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default FAQ