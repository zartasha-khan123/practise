// "use client"

// import { useState } from "react"
// import { X } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"

// interface CartItem {
//   id: string
//   name: string
//   price: number
//   quantity: number
//   image: string
// }

// export default function ShoppingCart() {
//   const [cartItems, setCartItems] = useState<CartItem[]>([
//     {
//       id: "1",
//       name: "LCD Monitor",
//       price: 650,
//       quantity: 1,
//       image: "/card3.png",
//     },
//     {
//       id: "2",
//       name: "H1 Gamepad",
//       price: 550,
//       quantity: 2,
//       image: "/card1.png",
//     },
//   ])

//   const updateQuantity = (id: string, newQuantity: number) => {
//     if (newQuantity < 1) return
//     setCartItems(
//       cartItems.map((item) =>
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       )
//     )
//   }

//   const removeItem = (id: string) => {
//     setCartItems(cartItems.filter((item) => item.id !== id))
//   }

//   const subtotal = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   )

//   return (
//     <div className="mx-auto max-w-[1170px] space-y-8 p-6">
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead className="w-[400px] font-normal">Product</TableHead>
//             <TableHead className="font-normal">Price</TableHead>
//             <TableHead className="font-normal">Quantity</TableHead>
//             <TableHead className="text-right font-normal">Subtotal</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {cartItems.map((item) => (
//             <TableRow key={item.id}>
//               <TableCell className="flex items-center gap-4">
//                 <button
//                   onClick={() => removeItem(item.id)}
//                   className="rounded-full bg-red-500 p-1"
//                 >
//                   <X className="h-4 w-4 text-white" />
//                 </button>
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="h-[54px] w-[54px] rounded object-cover"
//                   />
//                   <span>{item.name}</span>
//                 </div>
//               </TableCell>
//               <TableCell>${item.price}</TableCell>
//               <TableCell>
//                 <div className="flex w-[72px] items-center justify-between rounded border border-gray-300 px-3 py-2">
//                   <span>{item.quantity.toString().padStart(2, "0")}</span>
//                   <div className="flex flex-col gap-1">
//                     <button
//                       onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                       className="text-xs"
//                     >
//                       ▲
//                     </button>
//                     <button
//                       onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                       className="text-xs"
//                     >
//                       ▼
//                     </button>
//                   </div>
//                 </div>
//               </TableCell>
//               <TableCell className="text-right">
//                 ${item.price * item.quantity}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       <div className="flex justify-between gap-[10px] items-center">
//             <div className=" w-[218px] border-2 border-[#00000080] p-4  rounded text-center font-medium text-[16px] leading-[24px]"><button>Return to shop
//               </button></div>

//               <div className="w-[218px] border-2 border-[#00000080] p-4  rounded text-center font-medium text-[16px] leading-[24px]"><button>Update Cart
//               </button></div>
//           </div>

//       <div className="flex justify-between mt-[80px]">
//         <div className="flex gap-4">
//           <Input
//             placeholder="Coupon Code"
//             className="w-[300px] h-[56px] text-[16px] leading-[24px] border-black "
//           />

//           <Button className="bg-red-500 px-12 hover:bg-red-600 h-[56px] w-[211px]">
//             Apply Coupon
//           </Button>
//         </div>

//         <div className="w-[470px] rounded border-2 border-black p-6">
//           <h2 className="mb-6 text-xl font-medium">Cart Total</h2>
//           <div className="space-y-4">
//             <div className="flex justify-between border-b border-black/40 pb-4">
//               <span>Subtotal:</span>
//               <span>${subtotal}</span>
//             </div>
//             <div className="flex justify-between border-b border-black/40 pb-4">
//               <span>Shipping:</span>
//               <span>Free</span>
//             </div>
//             <div className="flex justify-between pb-4">
//               <span>Total:</span>
//               <span>${subtotal}</span>
//             </div>
//             <Button className="w-full bg-red-500 hover:bg-red-600">
//               Procees to checkout
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"

import { useState } from "react"
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
      image: "/card3.png",
    },
    {
      id: "2",
      name: "H1 Gamepad",
      price: 550,
      quantity: 2,
      image: "/card1.png",
    },
  ])

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className="mx-auto max-w-7xl space-y-8 p-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-full sm:w-[200px] md:w-[400px] font-normal">Product</TableHead>
            <TableHead className="font-normal">Price</TableHead>
            <TableHead className="font-normal">Quantity</TableHead>
            <TableHead className="text-right font-normal">Subtotal</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cartItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="flex items-center gap-4">
                <button
                  onClick={() => removeItem(item.id)}
                  className="rounded-full bg-red-500 p-1"
                >
                  <X className="h-4 w-4 text-white" />
                </button>
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="h-[54px] w-[54px] rounded object-cover"
                  />
                  <span>{item.name}</span>
                </div>
              </TableCell>
              <TableCell>${item.price}</TableCell>
              <TableCell>
                <div className="flex w-[72px] items-center justify-between rounded border border-gray-300 px-3 py-2">
                  <span>{item.quantity.toString().padStart(2, "0")}</span>
                  <div className="flex flex-col gap-1">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-xs"
                    >
                      ▲
                    </button>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-xs"
                    >
                      ▼
                    </button>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right">
                ${item.price * item.quantity}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex flex-wrap gap-4 justify-between mt-8">
        <div className="w-full sm:w-1/2 md:w-1/3 border-2 border-[#00000080] p-4 rounded text-center font-medium text-[16px] leading-[24px]">
          <button className="w-full">Return to shop</button>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 border-2 border-[#00000080] p-4 rounded text-center font-medium text-[16px] leading-[24px]">
          <button className="w-full">Update Cart</button>
        </div>
      </div>

      <div className="flex flex-wrap justify-between mt-[80px] gap-4">
        <div className="flex gap-4 w-full sm:w-2/3 md:w-1/3">
          <Input
            placeholder="Coupon Code"
            className="w-full sm:w-2/3 md:w-[300px] h-[56px] text-[16px] leading-[24px] border-black"
          />
          <Button className="bg-red-500 px-12 hover:bg-red-600 h-[56px] w-full sm:w-auto md:w-[211px]">
            Apply Coupon
          </Button>
        </div>

        <div className="w-full sm:w-2/3 md:w-[470px] rounded border-2 border-black p-6">
          <h2 className="mb-6 text-xl font-medium">Cart Total</h2>
          <div className="space-y-4">
            <div className="flex justify-between border-b border-black/40 pb-4">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between border-b border-black/40 pb-4">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between pb-4">
              <span>Total:</span>
              <span>${subtotal}</span>
            </div>
            <Button className="w-full bg-red-500 hover:bg-red-600">
              Proceed to checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
