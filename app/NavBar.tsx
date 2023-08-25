import React from 'react'
import { UserButton } from "@clerk/nextjs";


function NavBar() {
  return (
    <div className='text-red-500'>
        
        <div className="w-screen bg-red-500 p-2 grid justify-center items-center text-center text-white text-[15px]"> Free delevery for all orders over $50. Order your food now!</div>
              
        <div className=' w-screen grid grid-cols-2 p-5 border-b-[1px] border-red-500 md:grid-cols-3'>
          
          <div className='hidden md:flex gap-7 align-middle
            '>
            <div className='cursor-pointer p-2'>HomePage</div>
            <div className='cursor-pointer p-2'>Menu</div>
            <div className='cursor-pointer p-2'>Contact</div>
          </div>
          
          <div className='text-center uppercase text-[25px] text-red-500 font-semibold'>
            Gericht
          </div>

          <div className=' flex justify-end items-center pr-5 gap-4  sm:w-full'>
            <div><UserButton afterSignOutUrl="/"/></div>
            <div>Card</div>
          </div>
          
        </div>
        
    </div>
    
  )
}

export default NavBar