import React from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";


const ToDoList = () => {

    const scrollLeft = () => {
        document.getElementById("scroller").scrollLeft -= 550;
      };
    
      const scrollRight = () => {
        document.getElementById("scroller").scrollLeft += 550;
      };
    
  const todolist = [
    {
      title: "Jahanje",
      url: "https://www.wikihow.com/images/thumb/5/50/Ride-a-Horse-Step-15-Version-4.jpg/aid13169-v4-1200px-Ride-a-Horse-Step-15-Version-4.jpg",
    },

    {
      title: "Gradski bazen",
      url: "https://sinj-news.hr/wp-content/uploads/2023/06/Bazen-Sinj.jpg",
    },
    {
      title: "Paragliding",
      url: "https://www.waysoftheworldblog.com/wp-content/uploads/2021/09/Paragliding-in-Fethiye-8.jpg",
    },
    {
      title: "Padobranstvo",
      url: "https://www.ferata.hr/wp-content/uploads/2022/06/padobranci.jpg",
    },
    {
      title: "Paintball",
      url: "https://www.ponudadana.hr/images/offers/5589/thumb4.jpg?v=5",
    },
    {
      title: "Planinarenje",
      url: "https://krenizdravo.dnevnik.hr/wp-content/uploads/2021/12/Planinarenje-za-pocetnike.jpg?x15198",
    },
    {
      title: "Kanuing",
      url: "https://www.rinatravel.com/ea/wp-content/uploads/2017/03/rafting-1.jpg",
    },
    {
      title: "QUAD Adventure",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/2a/f7/ba/getlstd-property-photo.jpg?w=1200&h=-1&s=1",
    },

  ];

  return (
    <div className=" w-[1600px] h-[200px] flex items-center justify-center my-5  ">

      <div
        id="scroller"
        className="flex items-center justify-start gap-12 px-5 overflow-x-auto scrollbar-hide scroll-smooth"
      >

        {todolist.map((todolist) => (
          <div className="my-5 cursor-pointer border hover:scale-105 ease-in-out duration-500">
            <img
              className="flex gap-10 w-[500px] h-[200px] object-cover"
              src={todolist.url}
            />
            <div className="flex items-center font-semibold py-2 px-2.5">
                {todolist.title}
            </div>


            <div className="text-s w-[300px]  px-2">
            </div>
          </div>
        ))}
                        <AiOutlineDoubleLeft
          onClick={scrollLeft}
          size={25}
          className="mx-auto cursor-pointer z-20 absolute left-5"
        />
                <AiOutlineDoubleRight
          onClick={scrollRight}
          size={25}
          className="mx-auto cursor-pointer z-20 absolute right-5 duration-75"
        />
      </div>
    </div>
  );
};

export default ToDoList;
