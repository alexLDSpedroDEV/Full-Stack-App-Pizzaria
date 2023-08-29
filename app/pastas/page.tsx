"use client"
import NavBar from '@/components/NavBar'
import React, { useEffect, useState } from 'react'
import FoodItens from '../FoodItens'
import Image from 'next/image';

function page() {

  const [item, setitem] = useState<any>()
  const [contador, setcontador] = useState<any>()
  

  function filtro (data : any) {
    if (data.tipo == "pasta") {
      return data;
    }
  }

  var pizzas = FoodItens.filter(filtro);

  function filtroId (datas : any) {
    if (datas.name == item) {
      return datas;
    }
  }


  var Id = FoodItens.filter(filtroId);
  
  let vazio : any = ""
  
  let number :  number = 1

  const FuncaoContador = (num : number) => {
    number--
    console.log(number)
    console.log(num)
    setcontador(number);
  }
  const FuncaoSomar = () => {
    number = number + 1;
    
    setcontador(number);
  }
  
  

  return (
    <div>
      <NavBar/>
      <div>
        {
          Id.map((item : any,index : any) => (
            <div key={index} className='grid grid-cols-1 p-4'>
              <div>
                <Image className='m-auto' src={item.image} alt={item.name} width={220} height={320}/>
              </div>
              <div>
                <h2 className='sm:text-[25px] text-red-700 font-bold text-[30px] p-4'>{item.name}</h2>
                <p className='sm:text-[25px] text-red-500 font-bold text-[24px] p-4'>{item.value}</p>
                <p className='p-4 text-gray-400'>{item.text}</p>
                <div className=' grid grid-cols-2 justify-between p-4 items-center align-middle'>
                  <div className='flex p-[13px] border-[1px] border-red-500'>
                    <div className='flex 0'>
                      
                      <span onClick={() => FuncaoContador(1)}>&lt;</span>
                      <h2>{contador}</h2>
                      <span onClick={() => FuncaoSomar()}>&gt;</span>
                    </div>
                  </div>
                  <button className='bg-red-600 p-4  text-white text-[14px]'>ADD TO CART</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <div className={` grid grid-cols-1 w-screen h-[120%] justify-center sm:grid-cols-2 xl:grid-cols-3 ${Id == vazio ? "" : "hidden"}`}>
        {
          pizzas.map((item : any,index : any) => (
            <div key={index}  className='hover:cursor-pointer xl:w-[30vw] sm:w-[45vw] sm:m-3 w-[90vw] m-auto p-5 hover:bg-red-300 '>
              <h2 className='sm:text-[25px] text-red-700 font-bold text-[30px] p-4'>{item.name}</h2>
              <Image className='m-auto' src={item.image} alt={item.name} width={280} height={320}/>
              <div className='mt-9 grid grid-cols-2 justify-between items-center align-middle text-white'> 
                
                  <button className='text-center rounded-md p-4 bg-red-600 sm:p-2 sm:text-[12px]' onClick={() => {setitem(item.name)}}>ADD TO CART</button>
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