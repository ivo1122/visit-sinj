import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Header from "../components/Header";

const Slides = () => {
  const slides = [
    {
      url: "https://www.myistria.com/UserDocsImages/guide/sinj-slika.jpg",
      title: "308.",
      caption: "Sinjska alka",
      text: "06.08.2023.",
    },

    {
      url: "https://static.jutarnji.hr/images/slike/2021/04/23/k_10844825_640.jpg",
      title: "308.",
      caption: "Sinjska alka",
    },

    {
      url: "https://www.alka.hr/assets/images/1-Alkarski-Sinj-4.jpg",
      title: "Priroda",
      caption: "Sinjsko polje",
    },

    {
      url: "https://konobapojta.com/wp-content/gallery/interijer-interior/WhatsApp-Image-2021-07-13-at-20.28.45.jpeg",
      title: "Gastro",
      caption: "Tradicionalna ponuda jela",
    },

    {
      url: "https://www.visitsinj.hr/images/k2-static/znamenitosti/tri-generacije.jpg",
      title: "Kultura",
      caption: "Znamenitosti grada duge povijesti",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <div className="flex max-w-[2400px] h-[937px] m-auto relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full bg-center bg-cover duration-500 ease-in-out brightness-[65%] "
        ></div>
        <Header />

        <div className=" bg-none text-white w-full h-[350px] absolute bottom-0 text-center text-6xl uppercase font-bold">
          {slides[currentIndex].title}
          <div className="text-3xl mt-5 font-medium">
            {slides[currentIndex].caption}
          </div>
          <div className="text-2xl mt-5 font-semibold lowecase">
            {slides[currentIndex].text}
          </div>
        </div>

        {/* left arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={60} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-8 text-2xl rounded-full p-2  text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={60} />
        </div>

        {/* Right arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={60} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-8 text-2xl rounded-full p-2  text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={60} />
        </div>
      </div>
    </div>
  );
};

export default Slides;
