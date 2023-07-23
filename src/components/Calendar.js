import React from "react";
import News from "../data/news";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

const Calendar = () => {
  const scrollLeft = () => {
    document.getElementById("scroller").scrollLeft -= 350;
  };

  const scrollRight = () => {
    document.getElementById("scroller").scrollLeft += 350;
  };

  return (
    <div
      className="bg-cover bg-center  h-[700px]"
      style={{
        backgroundImage: `url(${"https://hercegovackiportal.com/wp-content/uploads/2020/08/antegaspar_sinj-520.jpg"})`,
      }}
    >
      <div className="relative">
        <h1 className="font-bold flex items-center justify-center text-2xl text-white py-8">
          Kalendar događaja
        </h1>
        <div className="w-[100%] h-[100%] p-4 flex items-center justify-center ">
          <IoMdArrowRoundBack
            onClick={scrollLeft}
            size={35}
            className="mx-auto cursor-pointer hover:scale-110 text-white"
          />
          <div>
            <News />
          </div>
          <IoMdArrowRoundForward
            onClick={scrollRight}
            size={35}
            className="mx-auto cursor-pointer hover:scale-110 text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
