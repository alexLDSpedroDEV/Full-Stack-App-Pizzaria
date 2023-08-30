"use client"
import NavBar from '@/components/NavBar'
import React, { useEffect, useState } from 'react'
import FoodItens from '../FoodItens'
import Image from 'next/image';
import axios from 'axios';

function page() {

  const [item, setitem] = useState<any>()
  const [contador, setcontador] = useState<any>(0)
  

  //chamar a API do backend
  const [data,setData] = useState<any>()

  function filtro (data : any) {
    if (data.tipo == "burgers") {
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
    

  }
  const FuncaoSomar = (num : number) => {
    let x : number = 0;
    
    setcontador(++x)

  }


  const API = (  data : any) => {
    //enviando os dados do state (json que criamos) para a url do backend
    console.log(data)

    Id.map((item: any) => {
      if (item.name === data) {

          const formData = new FormData();

          formData.append('image', item.image);
          formData.append('name', item.name);
          formData.append('value', item.value);
          formData.append('tipo', item.tipo);
          formData.append('text', item.text);
          

         
         
  
          axios.post('http://localhost:8080/produto/', formData, {
              headers: {
                  'Content-Type': 'application/json'
              }
          })
          .then(res => {
             
              console.log(res)
              alert(res);
          })
          .catch(error => {
              console.error('Erro ao registrar:', error);
          });
      }
    });
  

  }
  
  

  return (
    <div>
      <NavBar/>
      <div>
        {
          Id.map((item : any,index : any) => (
            <div key={index} className='grid grid-cols-1 p-4 sm:grid-cols-2 sm:h-[80vh] sm:h-[100vh] sm:items-center sm:justify-center '>
              <div>
                <Image className='m-auto w-[350px] md:w-[400px] xl:w-[480px]' src={item.image} alt={item.name} width={220} height={320}/>
              </div>
              <div className='md:w-[40vw] xl:[30vw]'>
                <h2 className='sm:text-[35px] text-red-700 font-bold text-[22px] uppercase p-4 sm:text-[30px]'>{item.name}</h2>
                <p className='p-4 text-gray-400'>{item.text}</p>
                <p className='sm:text-[30px] text-red-500 font-bold text-[24px] p-4'>{item.value}</p>
                <div className='p-4 grid gap-3 sm:gap-6 sm:flex sm:justify-center sm:text-center sm:align-middle hover:cursor-pointer'>
                  <div className='md:p-3 p-2 border-[1px] border-red-400 rounded-md text-red-400 hover:bg-red-400 hover:text-white'>Small (200g)</div>
                  <div className='md:p-3 p-2 border-[1px] border-red-400 rounded-md text-red-400 hover:bg-red-400 hover:text-white'>Medium (250g)</div>
                  <div className='md:p-3 p-2 border-[1px] border-red-400 rounded-md text-red-400 hover:bg-red-400 hover:text-white'>Large (300g)</div>
                </div>
                <div className=' grid grid-cols-2 justify-between p-4 items-center align-middle'>
                  <div className='flex p-[13px] sm:border-[1px] sm:border-red-500'>
                    <div className='flex 0'>
                      
                      <span onClick={() => FuncaoContador(1)}>&lt;</span>
                      <h2>{contador}</h2>
                      <button onClick={() => FuncaoSomar(1)}>&gt;</button>
                    </div>
                  </div>
                  <button className='bg-red-600 p-2 sm:p-4 text-white text-[14px]' onClick={() => API(item.name) }>ADD TO CART</button>
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
                
                  <button className='text-center rounded-md p-4 bg-red-600 sm:p-2 sm:text-[12px]' onClick={() => setitem(item.name)}>ADD TO CART</button>
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