import React from 'react'
import Image from 'next/image'

function Clients() {
  return (
    <div>
       <div className="flex flex-col sm:gap-10 sm:px-[32px] px-[20px]">
            <div className="flex justify-center relative sm:my-20 my-16">
        <h1 className="text-[9vw] sm:text-[50px] lg:text-[60px] font-bold sm:leading-[64px] z-10">
           What Our <span className="relative inline-block z-10">Client Says</span>
        </h1>
        </div>
        <div className="flex md:flex-row flex-col md:items-center gap-1 md:gap-[1.2vw] sm:mt-[2vw] mt-[5vw]">
        
    
        <div className=''>
        <Image 
        src="/Client.png"
        alt="client"
        width={ 400}
        height={500}
        className="object-contain"
        />
        </div>
        <div  className=''>
        <Image 
        src="/Client2.png"
        alt="client"
        width={ 400}
        height={500}
        className="object-contain"
        />
        </div>
        <div className='hover:bg-gradient-to-r from-cyan-500 to-blue-500'>
        <Image 
        src="/Client3.png"
        alt="client"
        width={ 400}
        height={500}
        className="object-contain"
        />
        </div>
        </div>
        </div>

    </div>
  )
}

export default Clients
