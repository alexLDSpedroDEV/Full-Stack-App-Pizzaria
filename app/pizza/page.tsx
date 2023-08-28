"use client"
import NavBar from '@/components/NavBar'
import React, { useState } from 'react'
import FoodItens from '../FoodItens'
import Image from 'next/image';

function page() {

  

  function filtro (data : any) {
    if (data.tipo == "pizza") {
      return data;
    }
  }

  var pizzas = FoodItens.filter(filtro);

  console.log(pizzas)
  

  return (
    <div>
      <NavBar/>
      <div className=' grid grid-cols-1 w-screen h-[120%] justify-center sm:grid-cols-2 xl:grid-cols-3'>
        {
          pizzas.map((item : any,index : any) => (
            <div key={index}  className='hover:cursor-pointer xl:w-[30vw] sm:w-[45vw] sm:m-3 w-[90vw] m-auto p-5 hover:bg-red-300 '>
              <h2 className='sm:text-[25px] text-red-700 font-bold text-[30px] p-4'>{item.name}</h2>
              <Image className='m-auto' src={item.image} alt={item.name} width={280} height={320}/>
              <div className='mt-9 grid grid-cols-2 justify-between items-center align-middle text-white'> 
                
                  <button className='text-center rounded-md p-4 bg-red-600 sm:p-2 sm:text-[12px]'>ADD TO CART</button>
                  <h2 className='text-end text-red-700 text-[25px] font-bold sm:text-[18px]'>$ {item.value}</h2>  
                
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default page