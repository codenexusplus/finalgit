// import React from 'react'
// import Card from './common/Card'
// const Section = () => {
//   return (
//     <div className='flex'>
//       <Card
//       imageUrl='/assets/imgs/img1.png'
//        title='Side Table'

       
//        />

//       <Card title='Side Table' imageUrl='/assets/imgs/img2.png'/>
//     </div>
//   )
// }

// export default Section


import Image from 'next/image'
import React from 'react'

const Section = () => {
  return (
    <div className='flex justify-center items-center bg-pink-100'>
       <div className="max-w-md m-2 p-4 ">
      
        {/* Image */}
        <Image 
          src='/assets/imgs/img1.png' 
          alt='id' 
          width={500} 
          height={500} 
          className=""
        />
    
      {/* Title */}
      <h3 className="mt-[-50px] mb-4 text-3xl font-medium  text-gray-800">
        Side Table
      </h3>
      <span className="pt-6 py-2 border-b-2 border-black text-xl font-medium  text-gray-800">
       View More
      </span>
     
    </div>
      
       <div className="max-w-md m-2 p-4    ">
      
        {/* Image */}
        <Image 
          src='/assets/imgs/img2.png' 
          alt='id' 
          width={500} 
          height={500} 
          className="mb-[120px]"
        />
    
      {/* Title */}
      <h3 className="mt-[-50px] mb-4 text-3xl font-medium  text-gray-800">
        Side Table
      </h3>
      <span className="pt-6 py-2 border-b-2 border-black text-xl font-medium  text-gray-800">
       View More
      </span>
     
    </div>
      

    
    </div>
  )
}

export default Section
