import React from "react";

const ToDoList = () => {
  const activities = [
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
    {
        title: "QUAD Adventure",
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/2a/f7/ba/getlstd-property-photo.jpg?w=1200&h=-1&s=1",
      },
      {
        title: "QUAD Adventure",
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/2a/f7/ba/getlstd-property-photo.jpg?w=1200&h=-1&s=1",
      },
      {
        title: "QUAD Adventure",
        url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/2a/f7/ba/getlstd-property-photo.jpg?w=1200&h=-1&s=1",
      },
  ];

  return (
    <>
      <div className="w-full h-full ">
        <div
          id="scroller"
          className="flex items-center justify-start overflow-x-auto relative scrollbar-hide scroll-smooth"
        >
          {activities.map((activities) => (
              <img
                src={activities.url}
                className="w-[640px] h-[400px] object-cover brightness-75 py-5  "
              />
          ))}
        </div>
      </div>
    </>
  );
};

export default ToDoList;
