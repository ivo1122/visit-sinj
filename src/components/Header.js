import React,{useState} from 'react'

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

    <div className={header ? "flex justify-between items-center fixed duration-1000 w-full bg-white text-blue z-10" : "flex items-center justify-between fixed w-full text-white duration-1000"}>
        
        <div className='font-semibold text-3xl py-3 ml-12'>#visitSinj</div> 

        <div className='flex'>

            <div className='flex justify-center items-center gap-10 text-xl font-medium mx-auto cursor-pointer mr-20'> 
            <span >Doživite</span>
            <span >Istražite</span>
            <span >Što raditi?</span>
            <span >Događanja kroz godinu</span>
            <span >Gastro ponuda</span>

            </div>




        </div>


            
            
            








    </div>
  )
}

export default Header