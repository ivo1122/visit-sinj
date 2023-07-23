import React, { useState } from "react";
import FirstItem from "../dropdown/FirstItem";
import SecondItem from "../dropdown/SecondItem";


const Header = () => {
  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div
      className={
        header
          ? "flex justify-between items-center fixed duration-1000 w-full bg-white text-blue z-10"
          : "flex items-center justify-between fixed w-full text-white duration-1000"
      }
    >
      <div className="font-semibold text-3xl py-3 ml-12">#visitSinj</div>

      <ul className="flex justify-center w-[1650px] items-center gap-10 text-xl mx-auto cursor-pointer mr-20 rounded-md  font-medium ">
        <li className="hover:text-2xl duration-300 scroll-smooth mr-5 w-[60px]"><FirstItem/></li>
        <li className="hover:text-2xl duration-300 scroll-smooth mr-5 w-[60px]"><SecondItem/></li>
        <li className="hover:text-2xl duration-300 scroll-smooth mr-5 w-[60px] ">Gastro</li>
        <li className="hover:text-2xl duration-300 scroll-smooth mr-5 w-[60px]">Smještaj</li>
      </ul>
    </div>
    
    
  );
};

export default Header;
