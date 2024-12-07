// import React from 'react'
// import RedHeading from './RedHeading'
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { Button } from './ui/button';
// import ProductCard from './product';
// import { flashCard } from '@/constant/flashcrads';




// function FlashSale() {
//   return (
//     <>
//       <section className='border-b-[1px] border-black pb-[60px]'>
//         {/*todays */}
//         <RedHeading text={"Today's"} textColor={"red"}/>

//         <div className='flex justify-between items-center'>
//                     {/* Today's Flash Sale */}

//         <div className="mt-[24px] flex items-center">
//           <h2 className="text-[36px] leading-[48px] font-semibold">Flash Sale</h2>

//           {/* time divs */}
//           <div className='inline-flex items-center gap-8 ml-[87px] '>
//          <div className='flex gap-6'>


//          <div className='text-center'>
//             <div className='text-[12px] leading-[18px] text-black'>Days</div>
//             <div className='text-[32px] leading-[30px] font-bold'>03</div>
//           </div>

// <div className='flex flex-col justify-center gap-1 mt-[20px]'>
//     <div className='w-1 h-1 bg-red-400 rounded-full'></div>
//     <div className='w-1 h-1 bg-red-400 rounded-full'></div>

// </div>

// <div className='text-center'>
//             <div className='text-[12px] leading-[18px] text-black'>Hours</div>
//             <div className='text-[32px] leading-[30px] font-bold'>23</div>
//           </div>

// <div className='flex flex-col justify-center gap-1 mt-[20px]'>
//     <div className='w-1 h-1 bg-red-400 rounded-full'></div>
//     <div className='w-1 h-1 bg-red-400 rounded-full'></div>

// </div>

// <div className='text-center'>
//             <div className='text-[12px] leading-[18px] text-black'>Minutes</div>
//             <div className='text-[32px] leading-[30px] font-bold'>19</div>
//           </div>

// <div className='flex flex-col justify-center gap-1 mt-[20px]'>
//     <div className='w-1 h-1 bg-red-400 rounded-full'></div>
//     <div className='w-1 h-1 bg-red-400 rounded-full'></div>

// </div>

// <div className='text-center'>
//             <div className='text-[12px] leading-[18px] text-black'>Seconds</div>
//             <div className='text-[32px] leading-[30px] font-bold'>56</div>
//           </div>
//          </div>
//           </div>
//           </div>
//   {/*arrow icons */}
// <div className='flex gap-2'> 
//     <Button size={'icon'} variant={'outline'} className='rounded-full'> <ChevronLeft size={24} /></Button>
//     <Button size={'icon'} variant={'outline'} className='rounded-full'> <ChevronRight size={24} /></Button>
// </div>
//         </div>


// {/* card divs*/}
// <div>
//   <div className='w-[1308px]  mt-[40px] flex gap-[30px] overflow-x-auto'>
// <ProductCard loop={flashCard}/>
// </div>

// <div className='text-center mt-[60px]'>
//   <button className='bg-[#DB4444] py-[16px] px-[48px] text-white text-[16px] hover:bg-gray-500'>View All Products</button></div>
// </div>
//       </section>
//     </>
//   )
// }

// export default FlashSale


import React from "react";
import RedHeading from "./RedHeading";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import ProductCard from "./product";
import { flashCard } from "@/constant/flashcrads";

function FlashSale() {
  return (
    <>
      <section className="border-b border-black pb-16 px-4">
        {/* Today's Heading */}
        <RedHeading text={"Today's"} textColor={"red"} />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Flash Sale Title and Timer */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <h2 className="text-2xl md:text-4xl font-semibold">Flash Sale</h2>

            {/* Timer */}
            <div className="flex items-center gap-6">
              {["Days", "Hours", "Minutes", "Seconds"].map((unit, index) => (
                <React.Fragment key={unit}>
                  <div className="text-center">
                    <div className="text-sm md:text-base text-black">{unit}</div>
                    <div className="text-2xl md:text-3xl font-bold">
                      {index === 0 ? "03" : index === 1 ? "23" : index === 2 ? "19" : "56"}
                    </div>
                  </div>
                  {index < 3 && (
                    <div className="flex flex-col justify-center gap-1 mt-2">
                      <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <Button
              size={"icon"}
              variant={"outline"}
              className="rounded-full w-10 h-10"
            >
              <ChevronLeft size={24} />
            </Button>
            <Button
              size={"icon"}
              variant={"outline"}
              className="rounded-full w-10 h-10"
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="mt-10 overflow-x-auto">
          <div className="flex gap-6 w-full">
            <ProductCard loop={flashCard} />
          </div>
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-10">
          <button className="bg-red-600 hover:bg-gray-500 text-white py-4 px-12 text-sm md:text-base rounded-lg">
            View All Products
          </button>
        </div>
      </section>
    </>
  );
}

export default FlashSale;
