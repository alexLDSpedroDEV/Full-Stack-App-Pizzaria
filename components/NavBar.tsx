import React from 'react'
import { UserButton } from "@clerk/nextjs";
import Link from 'next/link';


function NavBar() {
  return (
    <div className='text-red-500 '>
        
        <div className="w-screen bg-red-500 h-[50px] grid justify-center items-center text-center text-white text-[15px]"> Free delevery for all orders over $50. Order your food now!</div>
              
        <div className=' w-screen grid grid-cols-2 h-[90px] border-b-[1px] border-red-500 md:grid-cols-3'>
          
          <div className='hidden md:flex gap-7 align-middle items-center p-4
            '>
            <Link href={'/'}>HomePage</Link>
            <Link href={'/menu'}>Menu</Link>
          </div>
          
          
          <div className='uppercase text-[25px] flex items-center justify-center text-red-500 font-semibold'>
            Gericht
          </div>

          <div className=' flex justify-end items-center pr-5 gap-4  sm:w-full'>
            <div><UserButton afterSignOutUrl="/"/></div>
            <Link href={'/cart'}>Cart</Link>
          </div>
          
        </div>
        
    </div>
    
  )
}

export default NavBar