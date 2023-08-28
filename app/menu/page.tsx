"use client";

import NavBar from '@/components/NavBar'
import Link from 'next/link';
import React, { useState } from 'react'



function page() {

    const[setType, type] = useState<any>()

    type globalProps = {
        product: "alex"
    }
    

  return (
    <div>
        <NavBar/>
        
            <div className='xl:flex-row xl:w-[100vw] xl:h-[800px]  flex items-center flex-col justify-center w-[100vw] h-[1200px] m-auto'>
                <div className=' w-[95vw] h-[350px] p-12  bg-[url(".././public/m3.png")] bg-local  bg-no-repeat bg-center sm:bg-left sm:w-[500px]'>
                    <h2 className='uppercase text-white font-bold font-mono text-[35px] w-[100px]'>chesesy pizzas</h2>
                    <p className='text-gray-300 text-[15px] w-[200px] pt-3 pb-4'>Pizza Paradise:irresistible slices mouthwatering, and chessy perfection.</p>
                    <Link className='pt-2 pb-3 pl-5 pr-5 mt-5 bg-white text-red-400 rounded-md hover:cursor-pointer' href="/pizza">explore</Link>
                </div>
                <div className='sm:border-l-[1px] border-gray-400 w-[95vw] h-[350px] p-12  bg-[url(".././public/m2.png")] bg-local  bg-no-repeat bg-center sm:bg-left sm:w-[500px]'>
                    <h2 className='uppercase text-black font-bold font-mono text-[35px] w-[100px] '>juicy burgers</h2>
                    <p className='text-gray-500 text-[15px] w-[200px] pt-3 pb-4'>Burger bliss: Juicy patties, bold flavor, and gourmet toppings galore.</p>
                    <Link className='pt-2 pb-3 pl-5 pr-5 mt-4 bg-black text-red-400 rounded-md hover:cursor-pointer' href="/burgers">explore</Link>

                    
                </div>
                <div className=' w-[95vw] h-[350px] p-12 bg-[url(".././public/m1.png")] bg-local  bg-no-repeat bg-center sm:bg-left sm:w-[500px]'>
                    <h2 className='uppercase text-white font-bold font-mono text-[35px] w-[100px]'>italian pastas</h2>
                    <p className='text-gray-300 text-[15px] w-[200px] pt-3 pb-4'>svaor the tast of perfection with our exquisite italian handmade pasta menu.</p>
                    <Link className='pt-2 pb-3 pl-5 pr-5 mt-4 bg-white  text-red-400 rounded-md hover:cursor-pointer' href="/pastas">explore</Link>
                </div>
            </div>
        
    </div>
  )
}

export default page
