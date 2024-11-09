import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import Image from "next/image";

function Header() {
  return (
    <div className="navbar z-50 2xl:px-[220px] sm:px-[32px] px-[20px] bg-[#043873] text-white fixed sm:py-[14px] flex justify-between items-center w-full">
      <div className="navbar-start">
        <Image src="/Logo.png" alt="logo" width={100} height={100} />
      </div>
      <div className="navbar-center hidden lg:flex items-center">
        <ul className="menu menu-horizontal px-1 gap-8 text-[1.2vw] flex">
          <li>
            <details>
              <summary>Products</summary>
              <ul className="p-2 bg-[#043873] text-white">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Solution</summary>
              <ul className="p-2 bg-[#043873] text-white">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Resources</summary>
              <ul className="p-2 bg-[#043873] text-white">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Pricing</summary>
              <ul className="p-2 bg-[#043873] text-white">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
                {/* <a className="btn">Button</a> */}
                <div className='gap-4 hidden md:flex'>
                    <button className='bg-[#FFE492] text-[#043873] text-[1.1vw] font-[500] px-7 py-3 rounded-md'>Login</button>
                    <button className='flex items-center gap-2 bg-[#4F9CF9] text-[1.1vw] text-white px-4 py-3 rounded-md'>Try Whitepace free 
                    <span className='font-[100] text-[12px]'>
                           <FaArrowRight />
                    </span>
 
                    </button>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="sm:ml-2 text-[50px] lg:hidden">
                    <span className='text-[50px] lg:text-black/35 font-light'>
                                <IoIosMenu />
                    </span>

                        {/* <IoIosMenu className='text-[50px] lg:text-black/35 font-light' /> */}
                    </div>
                    
                        </div>
      </div>
      </div>
    
  );
}

export default Header;