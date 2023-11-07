import React from 'react'
import Image from 'next/image'



function SlideBar() {

  
  return (
    <div className=' w-screen h-[calc(100vh - 140px)] grid grid-cols-1  md:grid-cols-2 bg-[url(".././public/bgHome.jpg")] bg-center bg-cover'>
        <div className='flex  w-[100vw] h-[30vh] items-center text-center font-black text-[28px] text-red-500 md:w-[50vw] sm:h-[45vh] md:h-screen'>
            <h2 className='w-[80vw] m-auto uppercase md:w-[40vw] xl:w-[400px] xl:text-[45px]'>always fresh & always crispy & always hot</h2>
        </div>
        <div className=' flex align-bottom '>
            <Image 
                    src='/home.jpg' 
                    alt="logo" 
                    width={1200} 
                    height={800}
                    className='w-[100vw] md:h-[100vh] sm:h-[45vh] sm:bg-cover sm:bg-red-500'
                />
        </div>
    </div>
  )
}

export default SlideBar