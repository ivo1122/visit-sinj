import React from 'react'
import video from "../assets/video.mp4"

const Video = () => {
  return (
    <div className='flex w-[100%] h-[100vh] relative '>

      <video controls={false} autoPlay loop muted className='flex w-[100%] h-[100%] object-contain brightness-50 '>

        <source src={video} type="video/mp4" />
        </video>
        <div className='absolute w-[100%] h-[100%] bottom-20 flex flex-col justify-center items-center '>
            <h1 className='text-white text-7xl my-12'>Otkrijte ljepote Sinja</h1>
            <span className="text-white font-bold text-4xl">grada hrabrosti i tradicije</span>

        </div>


    </div>
  )
}

export default Video