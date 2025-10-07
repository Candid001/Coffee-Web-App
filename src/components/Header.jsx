import React, { useState } from "react";
import Logo from "../assets/Rectangle 1.svg";
import { navigationList } from "./data";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <div className="bg-[#FFF3E0] h-[83px] w-screen px-[10px] justify-between flex md:px-[40px] lg:px-[100px] md:py-[8px]">
        <img src={Logo} alt="Logo" />
        <button
          id="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden lg:hidden text-2xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        <nav className="hidden md:flex md:gap-4 lg:flex py-5 font-inter font-semibold text-base text-[#4B2C2080] gap-[27px]">
          {
            navigationList.map((item)=>
            <a href={item.href} className="hover:text-[#4B2C20]" key={item.id}>
            {item.name}
          </a>)
          }
        </nav>

        {isOpen && (
          <nav className="absolute top-[83px] left-0 w-full bg-[#FFF3E0] flex flex-col items-center py-5 font-inter font-semibold text-base text-[#4B2C2080] gap-5 md:hidden z-50 shadow-md">

            {navigationList.map((item)=>
                <a
              href={item.href}
              className="hover:text-[#4B2C20]"
              onClick={() => setIsOpen(false)}
            >{item.name}</a>
            )}
          </nav>
        )}
      </div>
    </>
  );
};

export default Header;
