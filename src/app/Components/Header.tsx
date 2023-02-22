import Image from "next/image";
import React from "react";
import SearchIcon from "./SearchIcon";
import { AiFillHome } from "react-icons/ai";
import { FiPlusCircle } from "react-icons/Fi";

const Header = () => {
  return (
    <main className="shadow-sm sticky top-0 py-2 bg-white border-b z-30">
      <div className="flex items-center justify-between max-w-6xl pt-2 mx-4 sm:mx-auto">
        <div className="cursor-pointer relative hidden lg:inline-grid">
          <Image
            src="http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
            alt="Logo-img"
            className="object-contain"
            width={90}
            height={70}
          />
        </div>
        <div className="cursor-pointer  relative  lg:hidden">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"
            width={50}
            height={50}
            alt="Logo-img"
            className="object-contain"
          />
        </div>

        {/* Middle */}
        <div className="relative">
          <div className="absolute top-2 left-1  ">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md  "
          />
        </div>

        {/* Right */}

        <div className="">
          <div className="flex space-x-4 items-center">
            <AiFillHome className="hidden md:inline-flex w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-200 ease-out" />
            <FiPlusCircle className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-200 ease-out" />
            <Image
              src="/profile.jpg"
              width={30}
              height={35}
              alt="Logo-img"
              className="h-10 w-10 rounded-full object-cover cursor-pointer"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
