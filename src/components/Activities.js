import React from "react";
import ToDoList from "../data/activities";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

const Activities = () => {
  const scrollLeft = () => {
    document.getElementById("scroller").scrollLeft -= 350;
  };

  const scrollRight = () => {
    document.getElementById("scroller").scrollLeft += 350;
  };

  return (
    <div className="relative">
      <h1 className="font-bold flex items-center justify-center text-2xl my-5">
        Što raditi?
      </h1>
      <div className="w-[100%] h-[100%] p-4 flex items-center justify-center ">

        <div>

          <ToDoList />

        </div>

      </div>
    </div>
  );
};

export default Activities;
