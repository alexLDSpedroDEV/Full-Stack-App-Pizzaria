import React from 'react'
import Image from 'next/image'

function SlideBar() {
  return (
    <div className=' w-screen h-[calc(100vh - 140px)] grid grid-cols-1 bg-red-200 md:grid-cols-2'>
        <div className='flex  w-[100vw] h-[30vh] items-center text-center font-black text-[28px] text-red-500 md:w-[50vw] md:h-screen'>
            <h2 className='w-[80vw] m-auto uppercase md:w-[40vw] xl:w-[400px] xl:text-[40px]'>always fresh & always crispy & always hot</h2>
        </div>
        <div className='pt-5 flex align-bottom md:pt-0'>
            <Image 
                    src='/slide1.png' 
                    alt="logo" 
                    width={550} 
                    height={100}
                    className='w-[100vw] h-auto'
                />
        </div>
    </div>
  )
}

export default SlideBar