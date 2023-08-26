"use client";

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function Delicius() {


    
    const [time, setTime] = useState<any>();
 

    useEffect(() => {
         const functionTime = setInterval(() => {
    
                let time = new Date();
                let hora = time.toLocaleTimeString();

                setTime(hora)
                
            }, 1000);
    }, []);

  return (
    <div className="xl:grid-cols-2 xl:h-[80vh] grid grid-cols-1 h-full mt-4 justify-center items-center text-white overflow-hidden bg-[url('.././public/offerBg.png')] bg-local bg-right bg-no-repeat	">

        <div className='w-[70vw] xl:w-[35vw] m-auto justify-center items-center pt-5'>
            <h2 className='text-[35px] xl:text-[55px] font-extrabold pb-4'>Delicious Burger & French Fry</h2>
            <p className='text-gray-200 xl:text-[15px] text-[13px] pb-4 md:w-[400px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum vitae officia et architecto, ab, praesentium, itaque culpa ratione ad aperiam incidunt dolorum.</p>
            <p className=' text-yellow-500 font-extrabold text-[40px] xl:text-[55px] font-mono'>{time}</p>
            <button className='p-3 bg-red-500 text-white rounded-md mt-4 xl:p-4 xl:text-[15px]'>Order Now</button>
        </div>
        <div className='flex justify-center items-center'>
            <Image src="/offerProduct.png" alt="" height={500} width={1110} className='mt-6 pb-6 w-[400px] h-[240px] sm:w-[500px] sm:h-[280px] md:h-[380px] md:w-[600px] xl:h-[500px] md:w-[850px] '/>
        </div>
    </div>
  )
}

export default Delicius