import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='flex justify-center items-center gap-[50px] h-[600px] bg-[#fff9e5]'>
         <div>
      <Image src="/assets/imgs/img8.png" alt='' height={700} width={700}/>
    </div>
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-2xl'>New Arrivals</h1>
      <h2 className='text-4xl mb-4'>Asgaard Sofa</h2>
      {/* <span className='text-xl mt-2 hover:border-b-2 border-black'>Shop Now</span> */}
      <button className='h-12 w-[200px] border-2 border-black'>Buy Now</button>
    </div>
   
  </div>
  )
}

export default Banner
