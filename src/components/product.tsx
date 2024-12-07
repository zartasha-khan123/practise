'use client'
import React from 'react'
import { Card } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Eye, Heart, Star, Trash2 } from 'lucide-react'
import { FlashCardInterface } from '@/constant/flashcrads'

function ProductCard({loop}:{loop:FlashCardInterface[]}) {
  
  return (
    <>
    {loop.map((item,index)=>{
        return(
<Card className='w-[270px] h-full overflow-hidden grow-0 shrink-0' key={index}>
{/* top image*/}
<div className='relative h-[250px] w-full bg-[#F5F5F5] p-3 flex items-center justify-center '>
 <div> <Image src={item.src} alt={'cards'} width={172} height={152}></Image>
 

  {/*cartshopping icon*/}
  {/* <div className='absolute top-0 bottom-3 left-3 flex flex-col gap-2'>
  {item.shoppingCart && <button className='rounded w-[50px] h-[50px] bg-black text-white'>
   <ShoppingCart size={20}/>Add To Cart
    </button>}</div> */}
 {/* {item.shoppingCart && (
            <button
              className="mt-4 flex flex-col items-center justify-center gap-2 py-2 px-4 bg-black text-white rounded-lg hover:bg-gray-800"
              onClick={() => alert(`Added ${item.shoppingCart} to cart`)}
            >
              <ShoppingCart size={20} /> {/* Shopping Cart Icon */}
              {/* Add To Cart
            </button>
 )} */ }
  {/* badge*/}
  {item.discountPrice && <Badge className='bg-[#B44444] py-1 px-3 absolute top-3 left-3  '>-{item.discountPrice}%</Badge>}

   {/*icon div*/}
  <div className='absolute top-3 right-3 flex flex-col gap-2'>
     {/*trash icon*/}
   {item.trashIcon &&  <Button size={'icon'} variant={'outline'} className='rounded-full w-[34px] h-[34px]'>
   <Trash2 size={24}/>
    </Button>}

   {/*heart icon*/}
   {item.heartIcon &&   <Button size={'icon'} variant={'outline'} className='rounded-full w-[34px] h-[34px]'>
   <Heart size={24}/>
    </Button>}

   {/*eye icon*/}
    {item.eyeIcon && <Button size={'icon'} variant={'outline'} className='rounded-full w-[34px] h-[34px]'>
   <Eye size={24}/>
    </Button>}
  </div>
</div>
</div>
{/*bottom div*/}
<div className='w-full  flex flex-col gap-[6px] text-[16px] leading-[24px] font-medium pl-[3px]'>
  <p className='mt-[10px]'>{item.heading}</p>
  <div className='flex gap-3' > 
  <span className='text-red-500'>${item.price}</span> <span className='text-gray-500 line-through'>{item.oldPrice && '$'}{item.oldPrice}</span>
  </div>

  <div className='flex gap-1  items-center'>
    {[...Array(item.star)].map(()=>{
      return (
        <Star size={20} fill='#FFAD33'color='#FFAD33' key={index}/>
      )
    })}

    <p className='text-gray-500'>{item.reviews}</p>
    
   </div>
</div>
</Card>
        )
    })}


      
    </>
  )
}

export default ProductCard
