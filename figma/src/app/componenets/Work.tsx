import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function Work() {
  return (
    <div>
       <div className="h-[44vw] flex items-end mt-48 sm:mt-10 md:mt-32 lg:mt-9">
            <div className='sm:px-[32px] xl:[220px] px-[20px] sm:h-[75%]  bg-[#043873] relative'>
            <div className='flex flex-col items-center mt-[8vw] sm:w-[75%]  sm:ml-10 mx-auto sm:text-center justify-center'>
                    <div className=' flex-col sm:text-center justify-center'>
                        <h1 className='text-white sm:text-[4vw] text-[6.9vw] sm:w-[100%] w-[80%] font-bold text-center'>Your work, <br className="sm:hidden block"/> everywhere <span className="relative inline-block z-10">you are</span></h1>

                        <p className='text-white sm:text-[1.2vw] text-[2.3vw] sm:w-[100%] w-[70%] font-[300] z-10  mt-[1vw] text-center'>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
                        </p>
                        <div className='flex sm:justify-center sm:mb-0 mb-[4vw]'>
                            <button className='flex items-center mt-[2.6vw] gap-2 bg-[#4F9CF9] px-[2.5vw] py-[1.6vw] sm:text-[1.1vw] text-[3vw] text-white sm:px-[2.2vw] sm:py-[1.2vw] sm:rounded-[0.5vw] rounded-sm'>Try Taskey <span className='font-[100] sm:text-[1vw] text-[3vw]'> <FaArrowRight/></span></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
       </div>
  )
}

export default Work
