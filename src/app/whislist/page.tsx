// import React from 'react'
// import RedHeading from '@/components/RedHeading'
// import { Whislist } from '@/constant/whislist'
// import { justforyou } from '@/constant/justyou'
// import { Card } from '@/components/ui/card'
// import Image from 'next/image'
// import { Badge } from '@/components/ui/badge'
// import { Button } from '@/components/ui/button'
// import { Eye, Heart, ShoppingCart, Star, Trash2 } from 'lucide-react'


// function Whishlist() {
//   return (
//     <>
//         <section className='mt-[70px] w-[1170px] m-auto '>

// {/*heading */}

// <RedHeading text='This Month' textColor='red'/>
// <div className="mt-[24px] flex items-end justify-between">
//   <h2 className=" inline-block text-[36px] leading-[48px] font-semibold">Wishlist (4)</h2>

//   <div className='flex gap-2'> 
//   <button className='border-[1px] border-black py-[16px] px-[48px] text-black text-[16px] hover:bg-gray-500'>Move All To Bag </button>
// </div>
// </div>


// {/*  card div */}


// <div className='w-full h-[350px] flex gap-[30px] mt-[60px]'>
// {Whislist.map((item,index)=>{
//      return(
//         <Card className='w-[270px] h-full overflow-hidden grow-0 shrink-0' key={index}>
//         {/* top image*/}
//         <div className='relative h-[250px] w-full bg-[#F5F5F5] p-3 flex items-center justify-center '>
//          <div> <Image src={item.src} alt={'cards'} width={172} height={152}></Image>
         
        
         
//          {/* {item.shoppingCart && (
//                     <button
//                       className="mt-4 flex flex-col items-center justify-center gap-2 py-2 px-4 bg-black text-white rounded-lg hover:bg-gray-800"
//                       onClick={() => alert(`Added ${item.shoppingCart} to cart`)}
//                     >
//                       <ShoppingCart size={20} /> {/* Shopping Cart Icon */}
//                       {/* Add To Cart
//                     </button>
//          )} */ }
//           {/* badge*/}
//           {item.discountPrice && <Badge className='bg-[#B44444] py-1 px-3 absolute top-3 left-3  '>-{item.discountPrice}%</Badge>}
        
//            {/*icon div*/}
//           <div className='absolute top-3 right-3 flex flex-col gap-2'>
//              {/*trash icon*/}
//            {item.trashIcon &&  <Button size={'icon'} variant={'outline'} className='rounded-full w-[34px] h-[34px]'>
//            <Trash2 size={24}/>
//             </Button>}
//           </div>
//         </div>
//          {/* cartshopping icon
//            <div className='absolute top-0 bottom-3 left-3 flex flex-col gap-2'>
//           {item.shoppingCart && <button className='rounded w-[50px] h-[50px] bg-black text-white'>
//            <ShoppingCart size={20}/>Add To Cart
//             </button>}
//             </div> */}
//         </div>
//         {/*bottom div*/}
//         <div className='w-full  flex flex-col gap-[6px] text-[16px] leading-[24px] font-medium pl-[3px]'>
//           <p className='mt-[10px]'>{item.heading}</p>
//           <div className='flex gap-3' > 
//           <span className='text-red-500'>${item.price}</span> <span className='text-gray-500 line-through'>{item.oldPrice && '$'}{item.oldPrice}</span>
//           </div>
        
          
//         </div>
//         </Card>
//      )


// })}/
// </div>
// <div className='mt-[70px] w-[1170px] m-auto'>
// <RedHeading text='This Month' textColor='red'/>
// {/*product month */}
// <div className="mt-[24px] flex items-end justify-between">
//   <h2 className=" inline-block text-[36px] leading-[48px] font-semibold">Just For You (4)</h2>

//   <div className='flex gap-2'> 
//   <button className='border-[1px] border-black py-[16px] px-[48px] text-black text-[16px] hover:bg-gray-500'>See All </button>
// </div>
// </div>
// <div className='w-full h-[350px] flex gap-[30px] mt-[60px]'>
// {justforyou.map((item,index)=>{
//     return(
//         <Card className='w-[270px] h-full overflow-hidden grow-0 shrink-0' key={index}>
//         {/* top image*/}
//         <div className='relative h-[250px] w-full bg-[#F5F5F5] p-3 flex items-center justify-center '>
//          <div> <Image src={item.src} alt={'cards'} width={172} height={152}></Image>
         
        
         
//           {/* badge*/}
//           {item.discountPrice && <Badge className='bg-green-400 py-1 px-3 absolute top-3 left-3  '>-{item.discountPrice}%</Badge>}
        
//            {/*icon div*/}
//           <div className='absolute top-3 right-3 flex flex-col gap-2'>
//              {/*trash icon*/}
//            {item.trashIcon &&  <Button size={'icon'} variant={'outline'} className='rounded-full w-[34px] h-[34px]'>
//            <Trash2 size={24}/>
//             </Button>}
        
//            {/*heart icon*/}
//            {item.heartIcon &&   <Button size={'icon'} variant={'outline'} className='rounded-full w-[34px] h-[34px]'>
//            <Heart size={24}/>
//             </Button>}
        
//            {/*eye icon*/}
//             {item.eyeIcon && <Button size={'icon'} variant={'outline'} className='rounded-full w-[34px] h-[34px]'>
//            <Eye size={24}/>
//             </Button>}
//           </div>
//         </div>
//         </div>
//         {/*bottom div*/}
//         <div className='w-full  flex flex-col gap-[6px] text-[16px] leading-[24px] font-medium pl-[3px]'>
//           <p className='mt-[10px]'>{item.heading}</p>
//           <div className='flex gap-3' > 
//           <span className='text-red-500'>${item.price}</span> <span className='text-gray-500 line-through'>{item.oldPrice && '$'}{item.oldPrice}</span>
//           </div>
        
//           <div className='flex gap-1  items-center'>
//             {[...Array(item.star)].map(()=>{
//               return (
//                 <Star size={20} fill='#FFAD33'color='#FFAD33'/>
//               )
//             })}
        
//             <p className='text-gray-500'>{item.reviews}</p>
            
//            </div>
//         </div>
//         </Card>       
//     )
// })
// }
    
// </div>
// </div>


// </section>


//     </>
//   )
// }

// export default Whishlist


import React from 'react';
import RedHeading from '@/components/RedHeading';
import { Whislist } from '@/constant/whislist';
import { justforyou } from '@/constant/justyou';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Heart, Star, Trash2 } from 'lucide-react';

function Whishlist() {
  return (
    <>
      <section className="mt-6 px-4 md:px-8 lg:px-0 lg:w-[1170px] lg:m-auto">
        {/* Heading */}
        <RedHeading text="This Month" textColor="red" />
        <div className="mt-6 flex flex-col md:flex-row items-start md:items-end justify-between">
          <h2 className="text-2xl md:text-[36px] leading-6 md:leading-[48px] font-semibold">
            Wishlist (4)
          </h2>
          <div className="mt-4 md:mt-0 flex gap-2">
            <button className="border border-black py-3 px-4 md:py-[16px] md:px-[48px] text-black text-sm md:text-[16px] hover:bg-gray-500">
              Move All To Bag
            </button>
          </div>
        </div>

        {/* Card Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {Whislist.map((item, index) => {
            return (
              <Card
                className="w-full overflow-hidden grow-0 shrink-0"
                key={index}
              >
                {/* Top Image */}
                <div className="relative h-[200px] md:h-[250px] w-full bg-[#F5F5F5] p-3 flex items-center justify-center">
                  <div>
                    <Image
                      src={item.src}
                      alt={'cards'}
                      width={172}
                      height={152}
                    />
                    {/* Badge */}
                    {item.discountPrice && (
                      <Badge className="bg-[#B44444] py-1 px-3 absolute top-3 left-3">
                        -{item.discountPrice}%
                      </Badge>
                    )}
                    {/* Icon Div */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2">
                      {item.trashIcon && (
                        <Button
                          size={'icon'}
                          variant={'outline'}
                          className="rounded-full w-[34px] h-[34px]"
                        >
                          <Trash2 size={24} />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="w-full flex flex-col gap-2 text-sm md:text-[16px] leading-5 md:leading-[24px] font-medium pl-[3px]">
                  <p className="mt-2">{item.heading}</p>
                  <div className="flex gap-3">
                    <span className="text-red-500">${item.price}</span>
                    <span className="text-gray-500 line-through">
                      {item.oldPrice && '$'}
                      {item.oldPrice}
                    </span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* "Just For You" Section */}
        <div className="mt-16">
          <RedHeading text="This Month" textColor="red" />
          <div className="mt-6 flex flex-col md:flex-row items-start md:items-end justify-between">
            <h2 className="text-2xl md:text-[36px] leading-6 md:leading-[48px] font-semibold">
              Just For You (4)
            </h2>
            <div className="mt-4 md:mt-0 flex gap-2">
              <button className="border border-black py-3 px-4 md:py-[16px] md:px-[48px] text-black text-sm md:text-[16px] hover:bg-gray-500">
                See All
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            {justforyou.map((item, index) => {
              return (
                <Card
                  className="w-full overflow-hidden grow-0 shrink-0"
                  key={index}
                >
                  {/* Top Image */}
                  <div className="relative h-[200px] md:h-[250px] w-full bg-[#F5F5F5] p-3 flex items-center justify-center">
                    <div>
                      <Image
                        src={item.src}
                        alt={'cards'}
                        width={172}
                        height={152}
                      />
                      {/* Badge */}
                      {item.discountPrice && (
                        <Badge className="bg-green-400 py-1 px-3 absolute top-3 left-3">
                          -{item.discountPrice}%
                        </Badge>
                      )}
                      {/* Icon Div */}
                      <div className="absolute top-3 right-3 flex flex-col gap-2">
                        {item.trashIcon && (
                          <Button
                            size={'icon'}
                            variant={'outline'}
                            className="rounded-full w-[34px] h-[34px]"
                          >
                            <Trash2 size={24} />
                          </Button>
                        )}
                        {item.heartIcon && (
                          <Button
                            size={'icon'}
                            variant={'outline'}
                            className="rounded-full w-[34px] h-[34px]"
                          >
                            <Heart size={24} />
                          </Button>
                        )}
                        {item.eyeIcon && (
                          <Button
                            size={'icon'}
                            variant={'outline'}
                            className="rounded-full w-[34px] h-[34px]"
                          >
                            <Eye size={24} />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="w-full flex flex-col gap-2 text-sm md:text-[16px] leading-5 md:leading-[24px] font-medium pl-[3px]">
                    <p className="mt-2">{item.heading}</p>
                    <div className="flex gap-3">
                      <span className="text-red-500">${item.price}</span>
                      <span className="text-gray-500 line-through">
                        {item.oldPrice && '$'}
                        {item.oldPrice}
                      </span>
                    </div>
                    <div className="flex gap-1 items-center">
                      {[...Array(item.star)].map((_, idx) => (
                        <Star
                          key={idx}
                          size={20}
                          fill="#FFAD33"
                          color="#FFAD33"
                        />
                      ))}
                      <p className="text-gray-500">{item.reviews}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Whishlist;
