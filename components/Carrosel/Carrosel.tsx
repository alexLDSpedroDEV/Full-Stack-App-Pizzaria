"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import Foods from './Foods'

function Carrosel() {

  const [setborder, border] = useState<any>();

  return (
    <div className='overflow-x-scroll overflow-y-hidden whitespace-nowrap mt-4 p-2 '>
      {
        Foods.map((data,index) => (
          <div  
            key={index}
            onClick={() => {border(index)}}
            className={`xl:w-[32vw] md:w-[25vw] m-auto inline-block box-content w-[43vw] mr-3  p-4 h-auto text-cente whitespace-pre-line text-center
           hover:bg-red-200 rounded-md ${setborder == index ? " border-[1px] border-red-500" : "null"}`}>

            <Image src={data.image} alt={data.name} width={300} height={350} className=' flex m-auto'/>
            <h2 className='text-red-600 font-serif text-[32px] font-semibold mt-5 '>{data.name}</h2>
            
            <div className=' text-red-400 flex justify-center h-auto pb-5 w-auto text-center m-auto pt-5 text-[10px] md:text-[12px] xl:w-[500px]'><p className='w-[30vw] block'>{data.text}</p></div>
            <p className='text-red-600 text-[20px] font-bold'>$ {data.value}</p>
            <button className='bg-red-500 mt-5 p-2 text-white rounded-md'>Add to Card</button>
          </div>
        ))
      }
    </div>
  )
}

export default Carrosel