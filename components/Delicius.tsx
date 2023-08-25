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
    <div className="grid grid-cols-1 p-5 justify-center items-center text-white h-[700px] overflow-hidden bg-[url('.././public/offerBg.png')] bg-local bg-right bg-no-repeat	">

        <div className='w-[70vw] m-auto justify-center items-center'>
            <h2 className='text-[30px] font-extrabold pb-4'>Delicious Burger & French Fry</h2>
            <p className='text-gray-200 text-[13px] pb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum vitae officia et architecto, ab, praesentium, itaque culpa ratione ad aperiam incidunt dolorum.</p>
            <p >
                {time}
                </p>
            <button>Order Now</button>
        </div>
        <div>
            {/* <Image src="" alt="" height={350} width={450}/> */}
        </div>
    </div>
  )
}

export default Delicius