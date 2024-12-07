// import React from 'react'
// import Image from 'next/image'
// import RedHeading from '@/components/RedHeading'
// import ProductCard from '@/components/product'
// import { flashCard } from '@/constant/flashcrads'

// function ProductDetails() {
//   return (
//     <>
//       <div className="px-4 py-10 md:px-16 w-max-[1170px] mx-auto">
//       {/* Breadcrumb */}
//       <div className="text-sm mb-6">
//         <span className="text-gray-500">Account / Gaming / </span>
//         <span className="font-semibold">Havic HV G-92 Gamepad</span>
//       </div>

     
//         {/* Image Section */}
//         <div className="  flex flex-col items-center md:flex-row md:items-start md:space-x-6">
//         <div className=" flex flex-col space-y-4 mt-4 md:mt-0">
//     {['/route2.png', '/route3.png', '/route4.png', '/route5.png'].map((src, idx) => (
//       <div key={idx} className="w-20 h-20 bg-gray-100 rounded-lg p-2">
//         <Image src={src} alt={`Gamepad ${idx}`} width={80} height={80} className="w-full h-full object-cover" />
//       </div>
//     ))}
//   </div>



//   {/* Main Image */}
//   <div className="w-full bg-gray-100 rounded-lg p-4">
//     <Image
//       src="/route1.png" // Replace with your image path
//       alt="Havic HV G-92 Gamepad"
//       width={500}
//       height={500}
//       className="mx-auto"
//     />
//   </div>

//   {/* Thumbnails (Vertical Layout) */}
  

//         {/* Details Section */}
//         <div>
//           <h1 className="  text-2xl font-bold">Havic HV G-92 Gamepad</h1>
//           <div className="flex items-center mt-2">
//             <div className="text-yellow-500 text-sm">★★★★★</div>
//             <span className="text-gray-500 ml-2">(150 Reviews)</span>
//           </div>
//           <p className="text-green-500 mt-2">In Stock</p>
//           <p className="text-3xl font-semibold mt-4">$192.00</p>
//           <p className="text-gray-700 mt-4">
//             Playstation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal.
//           </p>

//           {/* Options */}
//           <div className="mt-6">
//             <div className="flex items-center">
//               <span className="font-medium">Colours:</span>
//               <div className="flex space-x-2 ml-4">
//                 <div className="w-6 h-6 bg-red-500 rounded-full cursor-pointer"></div>
//                 <div className="w-6 h-6 bg-gray-500 rounded-full cursor-pointer"></div>
//               </div>
//             </div>
//             <div className="flex items-center mt-4">
//               <span className="font-medium">Size:</span>
//               <div className="flex space-x-4 ml-4">
//                 {['XS', 'S', 'M', 'L', 'XL'].map((size, idx) => (
//                   <button
//                     key={idx}
//                     className="px-4 py-2 border rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2"
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Quantity */}
//           <div className="flex items-center mt-6 space-x-4">
//             <div className="flex items-center border rounded-lg px-4 py-2">
//               <button className="text-lg font-bold">-</button>
//               <span className="mx-2">2</span>
//               <button className="text-lg font-bold">+</button>
//             </div>
//             <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">Buy Now</button>
//             <button className="border px-6 py-2 rounded-lg hover:bg-gray-100">❤️</button>
//           </div>

//           {/* Delivery Options */}
//           <div className='flex flex-row gap-[40px] border-[2px] border-black mt-[20px]'>
//           <div className="mt-6 ">
//             <div className="flex items-center space-x-4 ">
//               <Image src="/delivery.png" alt="Free Delivery" width={24} height={24} />
//               <h1>Free Delivery <p>Enter your postal code for Delivery Availability</p></h1>
//             </div>
//             <div className="flex items-center space-x-4 mt-2 ">
//               <Image src="/return.png" alt="Return Delivery" width={24} height={24} />
//               <h1>Return Delivery <span className="text-black"><p>Free 30 Days Delivery Returns. Details</p></span></h1>
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
//       </div>

//       <div className='border-b-[1px] border-black pb-[60px] w-[1170px] mx-auto'>
//         {/*todays */}
//         <RedHeading text={"Today's"} textColor={"red"}/>

//         <div className='flex justify-between items-center'>
//                     {/* Today's Flash Sale */}

//         <div className="mt-[24px] flex items-center">
//           <h2 className="text-[36px] leading-[48px] font-semibold">Flash Sale</h2>
//           </div>
//           </div>

//           <div>
//   <div className='w-[1170px]  mt-[40px] flex gap-[30px] overflow-x-auto'>
// <ProductCard loop={flashCard}/>
// </div>
// </div>
// </div>

//     </>
//   )
// }

// export default ProductDetails


import React from 'react';
import Image from 'next/image';
import RedHeading from '@/components/RedHeading';
import ProductCard from '@/components/product';
import { flashCard } from '@/constant/flashcrads';

function ProductDetails() {
  return (
    <>
      <div className="px-4 py-10 md:px-16 mx-auto max-w-screen-xl">
        {/* Breadcrumb */}
        <div className="text-sm mb-6">
          <span className="text-gray-500">Account / Gaming / </span>
          <span className="font-semibold">Havic HV G-92 Gamepad</span>
        </div>

        {/* Image Section */}
        <div className="flex flex-col md:flex-row md:space-x-6">
          {/* Thumbnails */}
          <div className="flex flex-row space-x-4 md:flex-col md:space-x-0 md:space-y-4">
            {['/route2.png', '/route3.png', '/route4.png', '/route5.png'].map((src, idx) => (
              <div key={idx} className="w-20 h-20 bg-gray-100 rounded-lg p-2">
                <Image src={src} alt={`Gamepad ${idx}`} width={80} height={80} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="w-full bg-gray-100 rounded-lg p-4">
            <Image
              src="/route1.png" // Replace with your image path
              alt="Havic HV G-92 Gamepad"
              width={500}
              height={500}
              className="mx-auto"
            />
          </div>

          {/* Details Section */}
          <div className="mt-6 md:mt-0">
            <h1 className="text-2xl font-bold">Havic HV G-92 Gamepad</h1>
            <div className="flex items-center mt-2">
              <div className="text-yellow-500 text-sm">★★★★★</div>
              <span className="text-gray-500 ml-2">(150 Reviews)</span>
            </div>
            <p className="text-green-500 mt-2">In Stock</p>
            <p className="text-3xl font-semibold mt-4">$192.00</p>
            <p className="text-gray-700 mt-4">
              Playstation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble-free install & mess-free removal.
            </p>

            {/* Options */}
            <div className="mt-6">
              <div className="flex items-center">
                <span className="font-medium">Colours:</span>
                <div className="flex space-x-2 ml-4">
                  <div className="w-6 h-6 bg-red-500 rounded-full cursor-pointer"></div>
                  <div className="w-6 h-6 bg-gray-500 rounded-full cursor-pointer"></div>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <span className="font-medium">Size:</span>
                <div className="flex space-x-4 ml-4">
                  {['XS', 'S', 'M', 'L', 'XL'].map((size, idx) => (
                    <button
                      key={idx}
                      className="px-4 py-2 border rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center mt-6 space-x-4">
              <div className="flex items-center border rounded-lg px-4 py-2">
                <button className="text-lg font-bold">-</button>
                <span className="mx-2">2</span>
                <button className="text-lg font-bold">+</button>
              </div>
              <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">Buy Now</button>
              <button className="border px-6 py-2 rounded-lg hover:bg-gray-100">❤️</button>
            </div>

            {/* Delivery Options */}
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <div className="flex items-center space-x-4">
                <Image src="/delivery.png" alt="Free Delivery" width={24} height={24} />
                <div>
                  <h1>Free Delivery</h1>
                  <p>Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Image src="/return.png" alt="Return Delivery" width={24} height={24} />
                <div>
                  <h1>Return Delivery</h1>
                  <p className="text-black">Free 30 Days Delivery Returns. Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Today's Flash Sale */}
        <div className="border-b-[1px] border-black pb-[60px] mt-10">
          <RedHeading text={"Today's"} textColor={"red"} />
          <div className="flex justify-between items-center mt-6">
            <h2 className="text-2xl font-semibold">Flash Sale</h2>
          </div>
          <div className="w-full mt-8 flex gap-6 overflow-x-auto">
            <ProductCard loop={flashCard} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
