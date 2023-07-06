import React,{useState} from 'react'
import news from '../data/rows'
import alka from "../assets/alka.jpg"

const Calendar = () => {

    

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? news.length -1 : currentIndex -1;
      setCurrentIndex(newIndex)
    }
  
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === news.length -1;
      const newIndex = isLastSlide ? 0 : currentIndex +1;
      setCurrentIndex(newIndex)
    }


  return (

    

    <div className='flex max-w-[2400px] h-[937px] justify center mx-auto'>
        <div className='flex container justify-center bg-red-400 mx-auto '>
            <div className='py-5'>
                <h1 className='text-xl font-semibold flex justify-center'>Kalendar događanja</h1>
                <div className='grid grid-cols-4 gap-10 py-10 mx-auto '>
                    {news.map(url=> {
                        return (
                              <div>
                                <img src={url}/>
                            </div> 
                        )
                    })}




                    {/*card*/}
{/*                     <div style={{backgroundImage: `url(${news[currentIndex].image})`}} className='max-w-[450px] h-[150px]'>
                    </div>


                    <div style={{backgroundImage: `url(${news[currentIndex].image})`}} className='max-w-[450px] h-[150]'>
                    </div>



                    <div style={{backgroundImage: `url(${news[currentIndex].image})`}} className='max-w-[450px] h-[150]'>
                    </div>

                    <div style={{backgroundImage: `url(${news[currentIndex].image})`}} className='max-w-[450px] h-[150]'>
                    </div>
 */}

                    






                    <div className='w-[450px] h-[400px] bg-yellow-200 '>
                        Ivo
                    </div>
                    <div className='w-[450px] h-[400px] bg-yellow-200 '>
                        Ivo
                    </div>


                </div>
            </div>
        
        <div>

        </div>
        

        </div>
    
    
    
    </div>
  )
}

export default Calendar