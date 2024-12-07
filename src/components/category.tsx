// import React from 'react'
// import RedHeading from './RedHeading'
// import { Button } from './ui/button'
// import { ChevronLeft, ChevronRight } from 'lucide-react'
// import { Card } from './ui/card'
// import Image from 'next/image'
// import { categorycard } from '@/constant/categorycard'

// function Category() {
//   return (
//     <>
//       <section className='mt-[80px] pb-[70px] border-b-[1px] border-black'>
//         {/*heading */}
//       <RedHeading text='categories' textColor='red'/>

//       <div className="mt-[24px] flex items-end justify-between">
//           <h2 className="text-[36px] leading-[48px] font-semibold">Browse By Category</h2>

//           <div className='flex gap-2'> 
//     <Button size={'icon'} variant={'outline'} className='rounded-full'> <ChevronLeft size={24} /></Button>
//     <Button size={'icon'} variant={'outline'} className='rounded-full'> <ChevronRight size={24} /></Button>
// </div>
// </div>

// {/*cards*/}
// <div className='w-full flex gap-[30px] mt-[60px] '>
//     {categorycard.map((item ,index)=>{
//         return(
//             <Card className={`w-[170px] h-[145px] flex gap-[16px] flex-col items-center justify-center 
//                 ${item.isActive ? 'bg-red-500' : 'bg-white'}
//             ${item.isActive ? 'text-white' : 'text-black'}
//             hover:bg-red-500 `} key={index}>
//         <Image src={item.src} alt='cards' width={56} height={56}></Image>
//         <p className='text-[16px] leading-[24px]'>{item.name}</p>
//     </Card>
//         )
//     })}
// </div>
//       </section>
//     </>
//   )
// }

// export default Category


import React from "react";
import RedHeading from "./RedHeading";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "./ui/card";
import Image from "next/image";
import { categorycard } from "@/constant/categorycard";

function Category() {
  return (
    <section className="mt-20 pb-16 border-b border-black px-4">
      {/* Heading */}
      <RedHeading text="categories" textColor="red" />

      <div className="mt-6 flex flex-col md:flex-row items-center md:justify-between gap-4">
        <h2 className="text-2xl md:text-4xl font-semibold text-center md:text-left">
          Browse By Category
        </h2>

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

      {/* Cards */}
      <div className="w-full flex flex-wrap justify-center md:justify-start gap-6 mt-12">
        {categorycard.map((item, index) => {
          return (
            <Card
              className={`w-[140px] h-[160px] flex flex-col items-center justify-center 
              gap-4 text-center 
              ${item.isActive ? "bg-red-500 text-white" : "bg-white text-black"}
              hover:bg-red-500 hover:text-white transition`}
              key={index}
            >
              <Image src={item.src} alt="cards" width={56} height={56} />
              <p className="text-base leading-6">{item.name}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export default Category;
