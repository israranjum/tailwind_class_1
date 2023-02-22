import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      {/* left */}

      <div className="flex items-center justify-between max-w-6xl pt-2">
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
        <h2>Right Side</h2>
      </div>

      {/* Middle */}

      {/* Right */}
    </div>
  );
};

export default Header;
