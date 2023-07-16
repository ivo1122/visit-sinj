import React, { useState } from "react";
import News from "../data/news";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

const Calendar = () => {
  const scrollLeft = () => {
    document.getElementById("scroller").scrollLeft -= 350;
  }


  const scrollRight = () => {
    document.getElementById("scroller").scrollLeft += 350;
  }

  return (
    <div className="relative">
    <h1 className="font-bold flex items-center justify-center text-2xl my-5">Kalendar događaja</h1>
    <div className="w-[100%] h-[100%] p-4 flex items-center justify-center ">
    <IoMdArrowRoundBack onClick={scrollLeft} size={25} className="mx-auto cursor-pointer"/> 
      <div>
        <News />
      </div>
      <IoMdArrowRoundForward onClick={scrollRight} size={25} className="mx-auto cursor-pointer"/>
    </div>
    </div>
  );
};

export default Calendar;
