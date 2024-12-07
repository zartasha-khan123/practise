// import React from "react";
// import { Button } from "./ui/button";
// import Image from "next/image";
// import { Facebook, Instagram, Linkedin,  Twitter } from "lucide-react";
// import { Input } from "./ui/input";
// import Link from "next/link";
// import { StepForward } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-black text-white pt-[80px] pb-[124px] mt-[140px] ">
//       <div className="container mx-auto px-[135px]">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
//           {/* Exclusive Section */}
//           <div className="space-y-4">
//             <h2 className="text-[24px] leading-[24px] font-bold ">Exclusive</h2>
//             <h3 className="text-[20px] leading-[28px] font-medium">
//               Subscribe
//             </h3>
//             <p className="text-base">Get 10% off your first order</p>
//             <div className="relative flex items-center space-x-2">
//               <Input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="bg-transparent border-white/40"
//               />
//               <StepForward className="absolute right-3 top-2 " />
             
//             </div>
//           </div>

//           {/* Support Section */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-medium">Support</h3>
//             <div className="space-y-2 ">
//               <p className="text-base">
//                 111 Bijoy sarani, Dhaka,
//                 <br />
//                 DH 1515, Bangladesh.
//               </p>
//               <p className="text-base">exclusive@gmail.com</p>
//               <p className="text-base">+88015-88888-9999</p>
//             </div>
//           </div>

//           {/* Account Section */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-medium">Account</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="#" className="text-base hover:underline">
//                   My Account
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className=" text-base hover:underline">
//                   Login / Register
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-base hover:underline">
//                   Cart
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-basehover:underline">
//                   Wishlist
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className=" text-base hover:underline">
//                   Shop
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Quick Link Section */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-medium">Quick Link</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="#" className=" text-base hover:underline">
//                   Privacy Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-base hover:underline">
//                   Terms Of Use
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-base hover:underline">
//                   FAQ
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-base hover:underline">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Download App Section */}
//           <div className="space-y-4">
//             <h3 className="text-xl font-medium">Download App</h3>
//             <p className="text-sm text-white/70">Save $3 with App New User Only</p>
//             <div className="flex items-center gap-4">
//               <div className="border-2 border-white p-1 rounded">
//                 <Image
//                   src="/Qr Code.png"
//                   alt="QR Code"
//                   width={80}
//                   height={80}
                
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Image
//                   src="/GooglePlay.png"
//                   alt="Google Play"
//                   width={104}
//                   height={30}
                 
//                 />
//                 <Image
//                   src="/AppStore.png"
//                   alt="App Store"
//                   width={104}
//                   height={30}
//                 />
//               </div>
//             </div>
//             <div className="flex gap-6 pt-4">
//               <Link href="#" className="hover:opacity-80">
//                 <Facebook className="h-6 w-6" />
//               </Link>
//               <Link href="#" className="hover:opacity-80">
//                 <Twitter className="h-6 w-6" />
//               </Link>
//               <Link href="#" className="hover:opacity-80">
//                 <Instagram className="h-6 w-6" />
//               </Link>
//               <Link href="#" className="hover:opacity-80">
//                 <Linkedin className="h-6 w-6" />
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Copyright Section */}
//         <div className="pt-8 border-t border-white/40">
//           <p className="text-center text-white/60">
//             © Copyright Rimel 2022. All right reserved
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }


import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, StepForward } from "lucide-react";
import { Input } from "./ui/input";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-10 pb-16 mt-10">
      <div className="container mx-auto px-4 lg:px-10 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Exclusive Section */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-2xl font-bold">Exclusive</h2>
            <h3 className="text-lg md:text-xl font-medium">Subscribe</h3>
            <p className="text-sm md:text-base">Get 10% off your first order</p>
            <div className="relative flex items-center">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-white/40 text-sm md:text-base"
              />
              <StepForward className="absolute right-3 top-2 md:top-3 text-white" />
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-medium">Support</h3>
            <div className="space-y-2">
              <p className="text-sm md:text-base">
                111 Bijoy sarani, Dhaka,
                <br />
                DH 1515, Bangladesh.
              </p>
              <p className="text-sm md:text-base">exclusive@gmail.com</p>
              <p className="text-sm md:text-base">+88015-88888-9999</p>
            </div>
          </div>

          {/* Account Section */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-medium">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm md:text-base hover:underline">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm md:text-base hover:underline">
                  Login / Register
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm md:text-base hover:underline">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm md:text-base hover:underline">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm md:text-base hover:underline">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Link Section */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-medium">Quick Link</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm md:text-base hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm md:text-base hover:underline">
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm md:text-base hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm md:text-base hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Download App Section */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-medium">Download App</h3>
            <p className="text-xs md:text-sm text-white/70">
              Save $3 with App New User Only
            </p>
            <div className="flex items-center gap-4">
              <div className="border-2 border-white p-1 rounded">
                <Image
                  src="/Qr Code.png"
                  alt="QR Code"
                  width={80}
                  height={80}
                  className="w-16 h-16 md:w-20 md:h-20"
                />
              </div>
              <div className="space-y-2">
                <Image
                  src="/GooglePlay.png"
                  alt="Google Play"
                  width={104}
                  height={30}
                  className="w-24 h-auto"
                />
                <Image
                  src="/AppStore.png"
                  alt="App Store"
                  width={104}
                  height={30}
                  className="w-24 h-auto"
                />
              </div>
            </div>
            <div className="flex gap-6 pt-4">
              <Link href="#" className="hover:opacity-80">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 border-t border-white/40">
          <p className="text-center text-xs md:text-sm text-white/60">
            © Copyright Rimel 2022. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
