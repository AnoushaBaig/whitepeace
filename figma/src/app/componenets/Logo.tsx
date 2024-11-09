import React from 'react'
import Image from 'next/image'

function Logo() {
  return (
       <div className="flex flex-col sm:gap-28 gap-12 sm:px-[32px] xl:[220px] px-[20px]">
            <div className="flex justify-center relative">
        <h1 className="text-[10vw] sm:text-[50px] lg:text-[60px] font-bold sm:leading-[64px] z-10">
            Our <span className="relative inline-block z-10">sponsors</span>
        </h1>
        </div>
        <div className='flex sm:flex-row items-center sm:gap-0 gap-[18vw] flex-col sm:justify-between'>
        <div className="sm:w-[5vmax] w-[14vw] h-[54px] flex items-center justify-center">
            <Image
            src="/Apple.png"
            alt="logo"
            width={100}
            height={100}
            className='object-contain'
            />
            </div>
            <div className="sm:w-[19vmax] w-[44vw] h-10 flex items-center justify-center">
            <Image
            src="/Microsoft.png"
            alt="logo"
            width={500}
            height={100}
            className='object-contain'/>
            </div>
            <div className="sm:w-[19vmax] w-[44vw] h-10  flex items-center justify-center">
                    <Image 
                    src="/Slack.png"
                    alt="logo"
                    width={500}
                    height={100}
                    className='object-contain'/>
                    </div>

                    <div className="sm:w-[19vmax] w-[60vw] h-10  flex items-center justify-center">
                    <Image
                    src="/Google.png"
                    alt="logo"
                    width={500}
                    height={100}
                    className='object-contain'/>
                    </div>

        </div>
        </div>
  )
}

export default Logo
