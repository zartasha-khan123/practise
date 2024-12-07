
// import React  from "react";
// import Image from "next/image";

// export default function Bottomdiv() {
//     return (
//       <div className=" p-8 mt-[140px] ">
//         <div className="flex flex-col md:flex-row justify-around items-center gap-8">
//           {/* Feature 1 */}
//           <div className="text-center max-w-xs">
//             <div className="flex justify-center mb-4">
//               <Image
//                 src="/services.png"
//                 alt="Free and Fast Delivery"
//                 width={80}
//                 height={80}
//                 className="w-12 h-12"
//               />
//             </div>
//             <h3 className="text-[20px] leading-[28px] font-semibold text-gray-800">Free and Fast Delivery</h3>
//             <p className=" text-[14px] leading-[21px]text-sm text-gray-600">Free delivery for all orders over $140</p>
//           </div>
  
//           {/* Feature 2 */}
//           <div className="text-center max-w-xs">
//             <div className="flex justify-center mb-4">
//               <Image
//                 src="/services1.png"
//                 alt="24/7 Customer Service"
//                 width={80}
//                 height={80}

//                 className="w-12 h-12"
//               />
//             </div>
//             <h3 className="text-[20px] leading-[28px] font-semibold text-gray-800">24/7 Customer Service</h3>
//             <p className="text-[14px] leading-[21px] text-sm text-gray-600">Friendly 24/7 customer support</p>
//           </div>
  
//           {/* Feature 3 */}
//           <div className="text-center max-w-xs">
//             <div className="flex justify-center mb-4">
//               <Image
//                 src="/services2.png"
//                 alt="Money Back Guarantee"
//                 width={80}
//                 height={80}
//                 className="w-12 h-12"
//               />
//             </div>
//             <h3 className="text-[20px] leading-[28px] font-semibold text-gray-800">Money Back Guarantee</h3>
//             <p className="text-[14px] leading-[21px]  text-sm text-gray-600">We return money within 30 days</p>
//           </div>
//         </div>
//       </div>
//     );
//   }


import React from "react";
import Image from "next/image";

export default function Bottomdiv() {
  return (
    <div className="p-8 mt-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {/* Feature 1 */}
        <div className="text-center max-w-xs">
          <div className="flex justify-center mb-4">
            <Image
              src="/services.png"
              alt="Free and Fast Delivery"
              width={80}
              height={80}
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">
            Free and Fast Delivery
          </h3>
          <p className="text-sm md:text-base text-gray-600">
            Free delivery for all orders over $140
          </p>
        </div>

        {/* Feature 2 */}
        <div className="text-center max-w-xs">
          <div className="flex justify-center mb-4">
            <Image
              src="/services1.png"
              alt="24/7 Customer Service"
              width={80}
              height={80}
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">
            24/7 Customer Service
          </h3>
          <p className="text-sm md:text-base text-gray-600">
            Friendly 24/7 customer support
          </p>
        </div>

        {/* Feature 3 */}
        <div className="text-center max-w-xs">
          <div className="flex justify-center mb-4">
            <Image
              src="/services2.png"
              alt="Money Back Guarantee"
              width={80}
              height={80}
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">
            Money Back Guarantee
          </h3>
          <p className="text-sm md:text-base text-gray-600">
            We return money within 30 days
          </p>
        </div>
      </div>
    </div>
  );
}
