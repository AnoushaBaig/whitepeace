import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

function Customize() {
  return (
      <div className='sm:px-[32px] flex sm:gap-0 gap-14 sm:flex-row flex-col xl:[220px] px-[20px] lg:py-[134px] py-[90px]  bg-[#043873]  mt-32'
        style={{
          backgroundImage: `url('/background.avif')`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "calc(100vw + 50%)",
        }}
      >
        <div className="h-full w-full flex flex-col gap-10 z-30  sm:px-[32px] xl:[220px] px-[20px] sm:py-20 py-14">
          <div className="flex sm:flex-row sm:items-center sm:justify-center sm:mt-10 mt-10 flex-col-reverse">
            <div className="sm:flex-1">
              <div className="relative flex items-center sm:justify-start justify-center sm:mt-0 mt-20 sm:pl-4">
                <div>
                  <Image
                    src="/Apps.png"
                    alt="round pict"
                    layout="responsive"
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="sm:text-start text-center sm:justify-start sm:flex-1">
              <h1 className="sm:text-[6vw] text-[40px] font-[700] sm:leading-[85px] leading-tight lg:mt-4 text-white">
                Work with Your Favorite
                <span className="relative inline-block z-10">
                  Apps Using whitepace
                </span>
              </h1>
              <p className="text-[18px] font-[400] text-white lg:w-[80%] sm:mt-10 mt-6">
                Whitepace teams up with your favorite software. Integrate with
                over 1000+ apps with Zapier to have all the tools you need for
                your project success.
              </p>
              <div className="flex sm:justify-start justify-center">
                <button className="flex items-center sm:mt-12 mt-16 gap-2 bg-[#4F9CF9] text-[16px] text-white px-7 py-[14px] rounded-md">
                  Read more
                  <span className="font-[100] text-[12px]">
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Customize;
