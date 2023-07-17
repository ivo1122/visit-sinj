import React from "react";
import ToDoList from "../data/activities";
import {  AiOutlineDoubleLeft,AiOutlineDoubleRight } from "react-icons/ai";

const Activities = () => {
  const scrollLeft = () => {
    document.getElementById("scroller").scrollLeft -= 650;
  };

  const scrollRight = () => {
    document.getElementById("scroller").scrollLeft += 650;
  };

  return (
    <>
      <h1 className="font-bold text-3xl flex items-center justify-center">
        Što raditi?
      </h1>

      <div className="w-[100%] h-[100%] flex items-center justify-center relative">
        <AiOutlineDoubleLeft onClick={scrollLeft}
          size={30}
          className="mx-auto absolute left-5 z-10 text-white cursor-pointer"
        />

        <ToDoList />
        <AiOutlineDoubleRight onClick={scrollRight}
          size={30}
          className="mx-auto absolute right-5 z-10 text-white cursor-pointer"
        />
      </div>
    </>
  );
};

export default Activities;
