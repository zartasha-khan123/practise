import Link from "next/link";
import React from "react";
import {DropdownMenu,DropdownMenuItem,DropdownMenuTrigger,DropdownMenuContent} from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Input } from "./ui/input";
import { Search } from 'lucide-react';
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';




  function Header() {
  return (
    <>

      <div>
        {/* Top header */}
        <div className="w-full h-12 bg-black text-white flex items-center justify-between px-[136px]">
          {/* content-1 */}
          <div className="flex text-center gap-2 items-center ml-[309px]">
            <span>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </span>
            <Link href="/" className=" font-semibold hover:underline">
              Shop Now
            </Link>
          </div>

          {/* dropDown */}
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 focus:outline-none">
                English
                <ChevronDown size={24} />
              </DropdownMenuTrigger>
              
              <DropdownMenuContent>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Urdu</DropdownMenuItem>
                <DropdownMenuItem>Arabic</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          </div>
          {/* Bottom Header*/}
          <div className="w-full border-b-[1px] border-black px-[135px] pt-[40px] pb-[16px]">
            <div className="container mx-auto px-4 py-6">
              <div className="flex items-center justify-between gap-8">
                {/* logo*/}
                <Link
                  href={"/"}
                  className="text-[24px] leading-[24px] font-bold"
                >
                  Exclusive
                </Link>

                {/* Navigation*/}
                <nav className="hidden md:flex items-center gap-8">
                  <Link
                    href={"/"}
                    className="text-[16px] leading-[24px] relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-black "
                  >
                    Home
                  </Link>
                  <Link
                    href={"/contact"}
                    className="text-[16px] leading-[24px] hover:text-gray-600"
                  >
                    Contact
                  </Link>
                  <Link
                    href={"/productDetails"}
                    className="text-[16px] leading-[24px] hover:text-gray-600"
                  >
                    About
                  </Link>
                  <Link
                    href={"/signup"}
                    className="text-[16px] leading-[24px] hover:text-gray-600"
                  >
                    Sign Up
                  </Link>
                </nav>

                {/* search & Icons*/}
                <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Input className='w-[243px] pl-[20px] bg-gray-50' placeholder='What are you looking for?' type='search'/>

                <Search className='absolute right-4 top-1/2  -translate-y-1/2 w-4 h-4 text-gray-500 '/>
                </div>
                <Link href='/productDetails'><Heart size={30} className='hover:text-gray-600' cursor='pointer'/></Link>
               <Link href='/cart'><ShoppingCart size={30} className='hover:text-gray-600' cursor='pointer'/></Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}

export default Header;