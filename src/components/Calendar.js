import React, { useState } from "react";
import news from "../data/rows";
import { BiTimeFive } from "react-icons/bi";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

const Calendar = () => {
  const [calendar, setCalendar] = useState();
  const itemsToRender = news.slice(0, 4);


  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };


  return (
    <div className="flex max-w-[1600px] justify-center mx-auto">
      <div className="py-5">
        <h1 className="text-2xl font-semibold flex justify-center">
          Kalendar događanja
        </h1>

        <div className="grid grid-cols-4 gap-10 py-10 mx-auto">
          <div className="absolute left-12 mt-20 pt-4 ml-3 cursor-pointer">
            <IoMdArrowRoundBack onClick={slideLeft} size={25} />
          </div>

          <div className="absolute right-12 mt-20 pt-4 ml-3 cursor-pointer">
            <IoMdArrowRoundForward onClick={slideRight} size={25} />
          </div>

          {itemsToRender.map((item, index) => (
            <div id="slider"
              key={item.index}
              className="rounded-lg hover:scale-105 duration-300 w-[380px] h-[300px]"
            >
              {item.title}
              <img
                src={item.url}
                alt={item.name}
                className="w-[380px] h-[200px] object-cover rounded-t-lg "
              ></img>

              <div className="py-3 flex items-center ">
                <BiTimeFive size={18} />
                <div className="ml-5">{item.time}</div>
              </div>
              <div className="text-sm">{item.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
