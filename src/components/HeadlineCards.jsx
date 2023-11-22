import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* card */}
      <div className='rounded-xl relative'>
        {/* overlay  */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Get the Best Test</p>
            <p className='px-2'>ALWAYS!</p>
            <button className='bg-white rounded-full text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
      </div>
      {/* card */}
      <div className='rounded-xl relative'>
        {/* overlay  */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>We deliver the BEST </p>
            <p className='px-2'>FOODS</p>
            <button className='bg-white rounded-full text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
      </div>
      {/* card */}
      <div className='rounded-xl relative'>
        {/* overlay  */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Also Get the Desserts</p>
            <p className='px-2'>Sweets</p>
            <button className='bg-white rounded-full text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/8887055/pexels-photo-8887055.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
      </div>
    </div>
  )
}

export default HeadlineCards
