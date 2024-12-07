// // import React from 'react'
// // import RedHeading from './RedHeading'
// // import { Button } from './ui/button'
// // import { ChevronLeft, ChevronRight, Eye, Heart, Star, Trash2 } from 'lucide-react'
// // import { Card } from './ui/card'
// // import Image from 'next/image'
// // import { Badge } from './ui/badge'
// // import { productArray } from '@/constant/ourproductarray'

// // function OurProducts() {
// //   return (
// //     <>

// //     <section className='w-full mt-[71px] '>
// //         <RedHeading text='Our Products' textColor='red'/>

// //         <div className="mt-[24px] flex items-end justify-between">
// //           <h2 className="text-[36px] leading-[48px] font-semibold">Explore Our Products</h2>

// //           <div className='flex gap-2'> 
// //     <Button size={'icon'} variant={'outline'} className='rounded-full'> <ChevronLeft size={24} /></Button>
// //     <Button size={'icon'} variant={'outline'} className='rounded-full'> <ChevronRight size={24} /></Button>
// // </div>
// // </div>


// // <div className='w-full h-[732px] grid grid-cols-4 gap-[30px]  mt-[60px]'>

// // {productArray.map((item,index)=>{
// //     return(
// //         <Card className='w-[270px] h-full overflow-hidden grow-0 shrink-0' key={index}>
// // {/* top image*/}
// // <div className='relative h-[250px] w-full bg-[#F5F5F5] p-3 flex items-center justify-center '>
// //   <Image src={item.src} alt={'cards'} width={172} height={152}></Image>

// //   {/* badge*/}
// //   {item.discountPrice && <Badge className='bg-green-400 py-1 px-3 absolute top-3 left-3  '>{item.discountPrice}</Badge>}

// //    {/*icon div*/}
// //   <div className='absolute top-3 right-3 flex flex-col gap-2'>
// //      {/*trash icon*/}
// //    {item.trashIcon &&  <Button size={'icon'} variant={'outline'} className='rounded-full w-[34px] h-[34px]'>
// //    <Trash2 size={24}/>
// //     </Button>}

// //    {/*heart icon*/}
// //    {item.heartIcon &&   <Button size={'icon'} variant={'outline'} className='rounded-full w-[34px] h-[34px]'>
// //    <Heart size={24}/>
// //     </Button>}

// //    {/*eye icon*/}
// //     {item.eyeIcon && <Button size={'icon'} variant={'outline'} className='rounded-full w-[34px] h-[34px]'>
// //    <Eye size={24}/>
// //     </Button>}
// //   </div>
// // </div>


// // {/*bottom div*/}
// // <div className='w-full  flex flex-col gap-[6px] text-[16px] leading-[24px] font-medium pl-[3px]'>
// //   <p className='mt-[10px]'>{item.heading}</p>
// //   <div className='flex gap-3' > <span className='text-red-300'>${item.price}</span>
// // {/* 2nd div*/}
// //   <div className='flex gap-1  items-center'>
// //     {[...Array(item.star)].map(()=>{
// //       return (
// //         <Star size={20} fill='#FFAD33'color='#FFAD33'/>
// //       )
// //     })}

// //     <p className='text-gray-500'>{item.reviews}</p>
    
// //    </div>
// // </div>

// // {/* 3rd div*/}

// // {item.colordiv && <div className='flex items-center gap-[8px]'>

// //     <div className={`w-[20px] h-[20px] rounded-full border-[1px] border-black bg-${item.color1}-500`}></div>


// //     <div className={`w-[20px] h-[20px] rounded-full  bg-${item.color2}-500`}>

// //     </div>
// // </div>}


// // </div>
// // </Card>


// //     )
// // })}


// // </div>


// // <div className='text-center mt-[60px]'>

// // <button className='bg-[#DB4444] py-[16px] px-[48px] hover:bg-gray-600 text-white'>View All Products</button>
// // </div>

// //     </section>
      
// //     </>
// //   )
// // }

// // export default OurProducts


// import React from 'react';
// import RedHeading from './RedHeading';
// import { Button } from './ui/button';
// import { ChevronLeft, ChevronRight, Eye, Heart, Star, Trash2 } from 'lucide-react';
// import { Card } from './ui/card';
// import Image from 'next/image';
// import { Badge } from './ui/badge';
// import { productArray } from '@/constant/ourproductarray';

// function OurProducts() {
//   return (
//     <>
//       <section className="w-full mt-[71px] px-4 md:px-8 lg:px-16">
//         <RedHeading text="Our Products" textColor="red" />

//         <div className="mt-[24px] flex flex-col md:flex-row items-center justify-between gap-4">
//           <h2 className="text-[24px] md:text-[36px] leading-[32px] md:leading-[48px] font-semibold text-center md:text-left">
//             Explore Our Products
//           </h2>

//           <div className="flex gap-2">
//             <Button size={'icon'} variant={'outline'} className="rounded-full">
//               <ChevronLeft size={24} />
//             </Button>
//             <Button size={'icon'} variant={'outline'} className="rounded-full">
//               <ChevronRight size={24} />
//             </Button>
//           </div>
//         </div>

//         <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] mt-[60px]">
//           {productArray.map((item, index) => {
//             return (
//               <Card className="w-full h-full overflow-hidden" key={index}>
//                 {/* Top image */}
//                 <div className="relative h-[200px] md:h-[250px] w-full bg-[#F5F5F5] p-3 flex items-center justify-center">
//                   <Image src={item.src} alt={'cards'} width={172} height={152} />

//                   {/* Badge */}
//                   {item.discountPrice && (
//                     <Badge className="bg-green-400 py-1 px-3 absolute top-3 left-3">
//                       {item.discountPrice}
//                     </Badge>
//                   )}

//                   {/* Icon div */}
//                   <div className="absolute top-3 right-3 flex flex-col gap-2">
//                     {item.trashIcon && (
//                       <Button
//                         size={'icon'}
//                         variant={'outline'}
//                         className="rounded-full w-[34px] h-[34px]"
//                       >
//                         <Trash2 size={24} />
//                       </Button>
//                     )}
//                     {item.heartIcon && (
//                       <Button
//                         size={'icon'}
//                         variant={'outline'}
//                         className="rounded-full w-[34px] h-[34px]"
//                       >
//                         <Heart size={24} />
//                       </Button>
//                     )}
//                     {item.eyeIcon && (
//                       <Button
//                         size={'icon'}
//                         variant={'outline'}
//                         className="rounded-full w-[34px] h-[34px]"
//                       >
//                         <Eye size={24} />
//                       </Button>
//                     )}
//                   </div>
//                 </div>

//                 {/* Bottom div */}
//                 <div className="w-full flex flex-col gap-[6px] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-medium pl-[3px]">
//                   <p className="mt-[10px]">{item.heading}</p>
//                   <div className="flex gap-3">
//                     <span className="text-red-300">${item.price}</span>

//                     <div className="flex gap-1 items-center">
//                       {[...Array(item.star)].map((_, starIndex) => (
//                         <Star key={starIndex} size={20} fill="#FFAD33" color="#FFAD33" />
//                       ))}
//                       <p className="text-gray-500">{item.reviews}</p>
//                     </div>
//                   </div>

//                   {/* Color div */}
//                   {item.colordiv && (
//                     <div className="flex items-center gap-[8px]">
//                       <div
//                         className={`w-[20px] h-[20px] rounded-full border-[1px] border-black bg-${item.color1}-500`}
//                       ></div>
//                       <div
//                         className={`w-[20px] h-[20px] rounded-full bg-${item.color2}-500`}
//                       ></div>
//                     </div>
//                   )}
//                 </div>
//               </Card>
//             );
//           })}
//         </div>

//         <div className="text-center mt-[40px] md:mt-[60px]">
//           <button className="bg-[#DB4444] py-[12px] md:py-[16px] px-[36px] md:px-[48px] hover:bg-gray-600 text-white">
//             View All Products
//           </button>
//         </div>
//       </section>
//     </>
//   );
// }

// export default OurProducts;


import React from 'react';
import RedHeading from './RedHeading';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Eye, Heart, Star, Trash2 } from 'lucide-react';
import { Card } from './ui/card';
import Image from 'next/image';
import { Badge } from './ui/badge';
import { productArray } from '@/constant/ourproductarray';

function OurProducts() {
  return (
    <>
      <section className="w-full mt-[71px] px-4 sm:px-6 md:px-8 lg:px-16">
        <RedHeading text="Our Products" textColor="red" />

        <div className="mt-[24px] flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-[20px] sm:text-[24px] md:text-[36px] leading-[28px] md:leading-[48px] font-semibold text-center md:text-left">
            Explore Our Products
          </h2>

          <div className="flex gap-2">
            <Button size={'icon'} variant={'outline'} className="rounded-full">
              <ChevronLeft size={20} />
            </Button>
            <Button size={'icon'} variant={'outline'} className="rounded-full">
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-[30px] mt-[30px] md:mt-[60px]">
          {productArray.map((item, index) => (
            <Card className="w-full h-full overflow-hidden" key={index}>
              {/* Top image */}
              <div className="relative h-[180px] sm:h-[220px] md:h-[250px] w-full bg-[#F5F5F5] p-3 flex items-center justify-center">
                <Image src={item.src} alt={'cards'} width={150} height={150} className="object-contain" />

                {/* Badge */}
                {item.discountPrice && (
                  <Badge className="bg-green-400 py-1 px-3 absolute top-3 left-3 text-[10px] sm:text-[12px] md:text-[14px]">
                    {item.discountPrice}
                  </Badge>
                )}

                {/* Icon div */}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  {item.trashIcon && (
                    <Button
                      size={'icon'}
                      variant={'outline'}
                      className="rounded-full w-[28px] h-[28px] sm:w-[34px] sm:h-[34px]"
                    >
                      <Trash2 size={20} />
                    </Button>
                  )}
                  {item.heartIcon && (
                    <Button
                      size={'icon'}
                      variant={'outline'}
                      className="rounded-full w-[28px] h-[28px] sm:w-[34px] sm:h-[34px]"
                    >
                      <Heart size={20} />
                    </Button>
                  )}
                  {item.eyeIcon && (
                    <Button
                      size={'icon'}
                      variant={'outline'}
                      className="rounded-full w-[28px] h-[28px] sm:w-[34px] sm:h-[34px]"
                    >
                      <Eye size={20} />
                    </Button>
                  )}
                </div>
              </div>

              {/* Bottom div */}
              <div className="w-full flex flex-col gap-[6px] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-medium pl-[3px]">
                <p className="mt-[10px]">{item.heading}</p>
                <div className="flex gap-2">
                  <span className="text-red-400 text-sm sm:text-base">${item.price}</span>

                  <div className="flex gap-1 items-center">
                    {[...Array(item.star)].map((_, starIndex) => (
                      <Star key={starIndex} size={16} fill="#FFAD33" color="#FFAD33" />
                    ))}
                    <p className="text-gray-500 text-sm sm:text-base">{item.reviews}</p>
                  </div>
                </div>

                {/* Color div */}
                {item.colordiv && (
                  <div className="flex items-center gap-[8px]">
                    <div
                      className={`w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] rounded-full border border-black bg-${item.color1}-500`}
                    ></div>
                    <div
                      className={`w-[16px] h-[16px] sm:w-[20px] sm:h-[20px] rounded-full bg-${item.color2}-500`}
                    ></div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-[40px] md:mt-[60px]">
          <button className="bg-[#DB4444] py-[10px] sm:py-[12px] md:py-[16px] px-[30px] sm:px-[36px] md:px-[48px] hover:bg-gray-600 text-white text-sm sm:text-base">
            View All Products
          </button>
        </div>
      </section>
    </>
  );
}

export default OurProducts;
