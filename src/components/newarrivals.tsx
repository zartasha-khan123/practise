// import React from 'react'
// import RedHeading from './RedHeading'
// import { Button } from './ui/button'
// import { Card, CardContent, CardFooter, CardTitle } from './ui/card'
// import Image from 'next/image'
// import Link from 'next/link'

// function NewArrivals() {
 
//   return (
// <>

//     <section className='w-full mt-[140px]'>

//         <RedHeading text='Featured' textColor='red'/>
//       <div className='flex justify-between items-end'>
//         <div className="mt-[24px] flex items-center">
//           <h2 className=" inline-block text-[36px] leading-[48px] font-semibold ">New Arrival</h2>
// </div>
// </div>

//       <div className='w-full h-[600px] mt-[60px]'>
//         <div className='w-full max-w-[1170px] mx-auto p-4'>
//        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//         {/* cards */}
//         <Card className="bg-black text-white border-gray-800 overflow-hidden relative rounded-md h-[600px]">
//           <div className='relative h-full'>
//             <Image src="/left.png" alt="PlayStation 5" width={600} height={400} className=" absolute left-1/2 -translate-x-1/2 top-[89px] " />
         
//             <div className="absolute bottom-8 left-8 space-y-4">
//                     <div className="space-y-4">
//                       <h2 className="text-2xl font-semibold tracking-wide font-inter">PlayStation 5</h2>
//                       <p className="text-sm text-gray-200 max-w-[242px] font-poppins">
//                         Black and White version of the PS5 coming out on sale.
//                       </p>
//                     </div>
//                     <Link
//                       href="#"
//                       className="inline-block text-white hover:opacity-75 transition-opacity font-poppins font-medium border-b border-white/50"
//                     >
//                       Shop Now
//                     </Link>
//                   </div>
//                 </div>
//               </Card>

//               <div className="space-y-8">
//                 {/* Women's Collections Card */}
//                 <Card className="relative overflow-hidden bg-[#0D0D0D] text-white rounded-md h-[284px]">
//                   <div className="relative h-full">
//                     <Image
//                       src="/right.png"
//                       alt="Women's Collections"
//                       width={432}
//                       height={286}
//                       className="absolute right-0 top-0 object-cover"
//                     />
//                     <div className="absolute top-1/2 -translate-y-1/2 left-6 space-y-4 z-10">
//                       <div className="space-y-4">
//                         <h2 className="text-2xl font-semibold tracking-wide font-inter">Women's Collections</h2>
//                         <p className="text-sm text-gray-200 max-w-[255px] font-poppins">
//                           Featured woman collections that give you another vibe.
//                         </p>
//                       </div>
//                       <Link
//                         href="#"
//                         className="inline-block text-white hover:opacity-75 transition-opacity font-poppins font-medium border-b border-white/50"
//                       >
//                         Shop Now
//                       </Link>
//                     </div>
//                   </div>
//                 </Card>

//                 <div className="grid grid-cols-2 gap-8">
//                   {/* Speakers Card */}
//                   <Card className="relative overflow-hidden bg-black text-white rounded-md h-[284px]">
//                     <div className="relative h-full">
//                       <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[196px] h-[196px] bg-white/90 blur-[150px]" />
//                       <Image
//                         src="/rightbottom1.png"
//                         alt="Amazon Echo"
//                         width={190}
//                         height={221}
//                         className="absolute left-1/2 -translate-x-1/2 top-8"
//                       />
//                       <div className="absolute bottom-6 left-6 space-y-2">
//                         <div className="space-y-2">
//                           <h2 className="text-2xl font-semibold tracking-wide font-inter">Speakers</h2>
//                           <p className="text-sm text-gray-200 font-poppins">Amazon wireless speakers</p>
//                         </div>
//                         <Link
//                           href="#"
//                           className="inline-block text-white hover:opacity-75 transition-opacity font-poppins font-medium border-b border-white/50"
//                         >
//                           Shop Now
//                         </Link>
//                       </div>
//                     </div>
//                   </Card>

//                   {/* Perfume Card */}
//                   <Card className="relative overflow-hidden bg-black text-white rounded-md h-[284px]">
//                     <div className="relative h-full">
//                       <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[238px] h-[238px] bg-white/90 blur-[150px]" />
//                       <Image
//                         src="/rightleft.png"
//                         alt="Gucci Perfume"
//                         width={201}
//                         height={203}
//                         className="absolute left-1/2 -translate-x-1/2 top-8"
//                       />
//                       <div className="absolute bottom-6 left-6 space-y-2">
//                         <div className="space-y-2">
//                           <h2 className="text-2xl font-semibold tracking-wide font-inter">Perfume</h2>
//                           <p className="text-sm text-gray-200 font-poppins">GUCCI INTENSE OUD EDP</p>
//                         </div>
//                         <Link
//                           href="#"
//                           className="inline-block text-white hover:opacity-75 transition-opacity font-poppins font-medium border-b border-white/50"
//                         >
//                           Shop Now
//                         </Link>
//                       </div>
//                     </div>
//                   </Card>
//                 </div>
//               </div>
//             </div>
//           </div>
//           </div>
        

//       </section>
//     </>


//   )
// }

// export default NewArrivals
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
//           {/* <CardFooter className="flex flex-col items-start p-4">
//             <CardTitle className="text-2xl mb-2">PlayStation 5</CardTitle>
//             <p className="text-gray-400 mb-4">Black and White version of the PS5 coming out on sale.</p>
//             <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">Shop Now</Button>
//           </CardFooter>
//         </Card>
//         <div className="grid grid-rows-2 gap-4">
//           <Card className="bg-black text-white border-gray-800 row-span-1">
//             <CardContent className="p-0 relative">
//               <Image src="/right.png" alt="Women's Collections" width={600} height={300} className="w-full h-full object-cover" />
//               <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end">
//                 <CardTitle className="text-2xl mb-2">Women's Collections</CardTitle>
//                 <p className="text-gray-300 mb-4">Featured woman collections that give you another vibe.</p>
//                 <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black w-fit">Shop Now</Button>
//               </div>
//             </CardContent>
//           </Card>
//           <div className="grid grid-cols-2 gap-4">
//             <Card className="bg-black text-white border-gray-800">
//               <CardContent className="p-0">
//                 <Image src="/rightdown.png" alt="Speakers" width={300} height={200} className="w-full h-auto" />
//               </CardContent>
//               <CardFooter className="flex flex-col items-start p-4">
//                 <CardTitle className="text-xl mb-2">Speakers</CardTitle>
//                 <p className="text-gray-400 text-sm mb-4">Amazon wireless speakers</p>
//                 <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black text-sm">Shop Now</Button>
//               </CardFooter>
//             </Card>
//             <Card className="bg-black text-white border-gray-800">
//               <CardContent className="p-0">
//                 <Image src="/rightleft.png" alt="Perfume" width={300} height={200} className="w-full h-auto" />
//               </CardContent>
//               <CardFooter className="flex flex-col items-start p-4">
//                 <CardTitle className="text-xl mb-2">Perfume</CardTitle>
//                 <p className="text-gray-400 text-sm mb-4">GUCCI INTENSE OUD EDP</p>
//                 <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black text-sm">Shop Now</Button>
//               </CardFooter>
//             </Card>
//           </div>
//         </div>
//       </div>
// </div>
// </div>
        

//   )
// }

// export default NewArrivals */}



import React from 'react';
import RedHeading from './RedHeading';
import { Card } from './ui/card';
import Image from 'next/image';
import Link from 'next/link';

function NewArrivals() {
  return (
    <>
      <section className="w-full mt-10 px-4">
        {/* Heading Section */}
        <RedHeading text="Featured" textColor="red" />
        <div className="flex justify-between items-end mt-6">
          <h2 className="text-2xl md:text-3xl font-semibold">New Arrival</h2>
        </div>

        {/* Cards Section */}
        <div className="w-full mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1 */}
            <Card className="bg-black text-white rounded-md h-auto lg:h-[600px] overflow-hidden relative">
              <div className="relative h-full">
                <Image
                  src="/left.png"
                  alt="PlayStation 5"
                  width={600}
                  height={400}
                  className="absolute left-1/2 transform -translate-x-1/2 top-24 lg:top-[89px]"
                />
                <div className="absolute bottom-8 left-4 lg:left-8 space-y-4">
                  <h2 className="text-lg md:text-2xl font-semibold">PlayStation 5</h2>
                  <p className="text-sm md:text-base text-gray-200">
                    Black and White version of the PS5 coming out on sale.
                  </p>
                  <Link
                    href="#"
                    className="inline-block text-white hover:opacity-75 transition-opacity border-b border-white/50"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </Card>

            {/* Right Cards Section */}
            <div className="space-y-6">
              {/* Card 2 */}
              <Card className="relative bg-[#0D0D0D] text-white rounded-md h-auto lg:h-[284px]">
                <div className="relative h-full">
                  <Image
                    src="/right.png"
                    alt="Women's Collections"
                    width={432}
                    height={286}
                    className="absolute right-0 top-0 object-cover"
                  />
                  <div className="absolute top-1/2 transform -translate-y-1/2 left-4 lg:left-6 space-y-4">
                    <h2 className="text-lg md:text-2xl font-semibold">Women&apos;s Collections</h2>
                    <p className="text-sm md:text-base text-gray-200">
                      Featured woman collections that give you another vibe.
                    </p>
                    <Link
                      href="#"
                      className="inline-block text-white hover:opacity-75 transition-opacity border-b border-white/50"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </Card>

              {/* Small Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 3 */}
                <Card className="relative bg-black text-white rounded-md h-auto lg:h-[284px]">
                  <div className="relative h-full">
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] md:w-[196px] md:h-[196px] bg-white/90 blur-[150px]" />
                    <Image
                      src="/rightbottom1.png"
                      alt="Amazon Echo"
                      width={190}
                      height={221}
                      className="absolute left-1/2 transform -translate-x-1/2 top-8"
                    />
                    <div className="absolute bottom-4 left-4 space-y-2">
                      <h2 className="text-lg md:text-2xl font-semibold">Speakers</h2>
                      <p className="text-sm text-gray-200">Amazon wireless speakers</p>
                      <Link
                        href="#"
                        className="inline-block text-white hover:opacity-75 transition-opacity border-b border-white/50"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </Card>

                {/* Card 4 */}
                <Card className="relative bg-black text-white rounded-md h-auto lg:h-[284px]">
                  <div className="relative h-full">
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] md:w-[238px] md:h-[238px] bg-white/90 blur-[150px]" />
                    <Image
                      src="/rightleft.png"
                      alt="Gucci Perfume"
                      width={201}
                      height={203}
                      className="absolute left-1/2 transform -translate-x-1/2 top-8"
                    />
                    <div className="absolute bottom-4 left-4 space-y-2">
                      <h2 className="text-lg md:text-2xl font-semibold">Perfume</h2>
                      <p className="text-sm text-gray-200">GUCCI INTENSE OUD EDP</p>
                      <Link
                        href="#"
                        className="inline-block text-white hover:opacity-75 transition-opacity border-b border-white/50"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewArrivals;
