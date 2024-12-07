// import React from 'react'
// import RedHeading from './RedHeading'
// import { bestsellingcards } from '@/constant/bestselling'
// import ProductCard from './product'
// import Image from 'next/image'

// function Month() {
//   return (
//     <>
//       <section className='mt-[70px] '>

//         {/*heading */}

//         <RedHeading text='This Month' textColor='red'/>
//         {/*product month */}
//         <div className="mt-[24px] flex items-end justify-between">
//           <h2 className=" inline-block text-[36px] leading-[48px] font-semibold">Best Selling Products</h2>

//           <div className='flex gap-2'> 
//           <button className='bg-[#DB4444] py-[16px] px-[48px] text-white text-[16px] hover:bg-gray-500'>View All </button>
// </div>
// </div>


// {/*  card div */}
// <div className='w-full h-[350px] flex gap-[30px] mt-[60px]'>
// <ProductCard loop={bestsellingcards}/>
    
// </div>

// {/*picture div */}

// <div className='w-[1150px] h-[500px] relative mt-[140px]'>
//     <Image src='/mainpichero.png' alt='img' layout='fill' objectFit='cover'/>

// </div>

//       </section>
//     </>
//   )
// }

// export default Month


import React from 'react';
import RedHeading from './RedHeading';
import { bestsellingcards } from '@/constant/bestselling';
import ProductCard from './product';
import Image from 'next/image';

function Month() {
  return (
    <>
      <section className="mt-[70px] px-4 lg:px-0">

        {/* Heading */}
        <RedHeading text="This Month" textColor="red" />

        {/* Product Section Header */}
        <div className="mt-[24px] flex flex-col lg:flex-row items-start lg:items-end justify-between gap-4">
          <h2 className="text-[24px] lg:text-[36px] leading-[32px] lg:leading-[48px] font-semibold">
            Best Selling Products
          </h2>
          <div className="flex">
            <button className="bg-[#DB4444] py-2 px-6 lg:py-[16px] lg:px-[48px] text-white text-[14px] lg:text-[16px] hover:bg-gray-500 transition-all">
              View All
            </button>
          </div>
        </div>

        {/* Card Section */}
        <div className="w-full flex flex-wrap gap-4 lg:gap-[30px] mt-[40px]">
          <ProductCard loop={bestsellingcards} />
        </div>

        {/* Image Section */}
        <div className="relative w-full lg:w-[1150px] h-[200px] lg:h-[500px] mt-[60px] lg:mt-[140px] mx-auto">
          <Image
            src="/mainpichero.png"
            alt="Main Product"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
      </section>
    </>
  );
}

export default Month;
