// import { navlinks } from '@/constant/navlinks'
// import React from 'react'
// import { ChevronRight } from 'lucide-react';
// import Image from 'next/image';


// function Hero() {
//   return (
//     <>
//       <section className='flex w-full mb-[140px]'>

//         {/*side bar */}
//         <nav className='flex flex-col gap-4 w-[217px] mt-[40px]'>

//           {navlinks.map((links,index)=>{
//             return <button key={index}className='flex items-center justify-between text-left hover:text-primary transition-colors'>
//               <span className='text-[16px] leading'>{links.name}</span>
//               {links.icon == true &&<ChevronRight />}


//             </button>
//           })}

//         </nav>


// {/*line */}
// <div className='w-[1px] bg-black h-[384px] ml-[16px] mr-[45px]'></div>

// {/*picture hero */}
// <div className='w-[892px] h-[344px] mt-[40px] relative'>
//   <Image src="/heropic.png" alt='heropic' layout='fill' objectFit='cover'></Image>
// </div>
//       </section>
//     </>
//   )
// }

// export default Hero


import { navlinks } from '@/constant/navlinks';
import React from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

function Hero() {
  return (
    <>
      <section className="flex flex-col lg:flex-row w-full mb-[140px]">

        {/* Sidebar */}
        <nav className="flex flex-col gap-4 lg:w-[217px] mt-[40px] w-full px-4 lg:px-0">
          {navlinks.map((links, index) => (
            <button
              key={index}
              className="flex items-center justify-between text-left hover:text-primary transition-colors"
            >
              <span className="text-[16px] leading">{links.name}</span>
              {links.icon && <ChevronRight />}
            </button>
          ))}
        </nav>

        {/* Line */}
        <div className="hidden lg:block w-[1px] bg-black h-[384px] ml-[16px] mr-[45px]"></div>

        {/* Picture Hero */}
        <div className="relative w-full lg:w-[892px] h-[200px] lg:h-[344px] mt-[40px] mx-auto px-4 lg:px-0">
          <Image
            src="/heropic.png"
            alt="hero pic"
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
