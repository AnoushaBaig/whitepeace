import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

function Project() {
  return (
    //                first part
    <div className="relative">
      <div className="h-full w-full flex flex-col gap-10 z-30  sm:px-[32px] xl:[220px] px-[20px] sm:py-20 py-14">
        <div className="sm:flex sm:items-center">
          <div className="sm:text-start text-center sm:justify-start sm:flex-1">
            <h1 className="sm:text-[6vw] text-[40px] font-[700] sm:leading-[85px] leading-tight lg:mt-4">
              Project
              <span className="relative inline-block z-10">Management</span>
            </h1>
            <p className="text-[18px] font-[400] text-[#212529] lg:w-[80%] sm:mt-10 mt-6">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </p>
            <div className="flex sm:justify-start justify-center">
              <button className="flex items-center sm:mt-12 mt-16 gap-2 bg-[#4F9CF9] text-[16px] text-white px-7 py-[14px] rounded-md">
                Get Started
                <span className="font-[100] text-[12px]">
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center sm:justify-end sm:mt-0 mt-11 sm:flex-1">
            <div className="lg:w-[46vmax] sm:w-[42vmin] w-[80vw] overflow-hidden">
              <Image
                src="/women.avif"
                alt="girlpic"
                layout="responsive"
                width={670}
                height={200}
                className="object-cover"
              />
            </div>
          </div>
        </div>
        {/* second part */}
        <div className="flex sm:flex-row sm:items-center sm:justify-center sm:mt-10 mt-10 flex-col-reverse">
                    <div className='sm:flex-1'>
                     <div className="relative flex items-center sm:justify-start justify-center sm:mt-0 mt-20 sm:pl-4">
          <div>
            <Image
              src="/Work Together Image.png"
              alt="round pict"
              width={400}
              height={400}
            />
          </div>
          </div>
          </div>

          <div className="sm:text-start text-center sm:justify-start sm:flex-1">
            <h1 className="sm:text-[6vw] text-[38px] font-[700] sm:leading-[85px] leading-tight lg:mt-4">
              Work <span className="relative inline-block z-10">together</span>
            </h1>
            <p className="text-[18px] font-[400] text-[#212529] lg:w-[80%] sm:mt-10 mt-6">
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </p>
            <div className="flex sm:justify-start justify-center">
              <button className="flex items-center sm:mt-12 mt-16 gap-2 bg-[#4F9CF9] text-[16px] text-white px-7 py-[14px] rounded-md">
                Try it Now
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

export default Project;
