import React,{useState} from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs"

const Slides = () => {
  const slides = [
    {
      url: "https://www.visitsinj.hr/media/k2/items/cache/9caa2793658f3cc387f216157300b1ce_XL.jpg",
      title: "308",
      caption : "Sinjska alka",
      text: "06.08.2023."
    },

    {
      url: "http://www.ethnodalmatia.com/images/destinacije/regija-sinjska-krajina/uploads/Panorama_Sinj_Dario_Bajurin.jpg",
      title: "308",
      caption : "Sinjska alka",
      text: "06.08.2023."
    },

    {
      url: "https://konobapojta.com/wp-content/gallery/interijer-interior/WhatsApp-Image-2021-07-13-at-20.28.45.jpeg",
      title: "308",
      caption : "Sinjska alka",
      text: "06.08.2023."
    },

    {
      url: "https://www.alka.hr/assets/images/1-Alkarski-Sinj-4.jpg",
      title: "308",
      caption : "Sinjska alka",
      text: "06.08.2023."
    },

    {
      url: "https://www.visitsinj.hr/images/k2-static/znamenitosti/tri-generacije.jpg",
      title: "308",
      caption : "Sinjska alka",
      text: "06.08.2023."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
    setCurrentIndex(newIndex)
  }


  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex +1;
    setCurrentIndex(newIndex)
  }


  return <div className="flex max-w-[2400px] h-[937px] w-full m-auto relative group">
    <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full bg-center bg-cover duration-500 brightness-[65%]">
        <div className=" bg-white text-black w-full h-[400px] absolute bottom-5 text-center font-semibold text-7xl uppercase">{slides[currentIndex].caption}</div>
        
        
       



    </div>
 
{/* left arrow */ }
<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2- text-white cursor-pointer">
    <BsChevronCompactLeft onClick={prevSlide} size={60}/>
</div>
<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-8 text-2xl rounded-full p-2-  text-white cursor-pointer">
    <BsChevronCompactLeft onClick={prevSlide} size={60}/>
</div>




{/* Right arrow */ }
<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2- text-white cursor-pointer">
    <BsChevronCompactRight onClick={nextSlide} size={60}/>
</div>
<div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-8 text-2xl rounded-full p-2-  text-white cursor-pointer">
    <BsChevronCompactRight onClick={nextSlide} size={60}/>
</div>




  </div>;
};

export default Slides;
