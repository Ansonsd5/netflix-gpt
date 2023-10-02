import React from 'react'

const VideoTitle = ({movieTitle,movieDiscription}) => {
   
  return (
    <div className=' text-white w-screen aspect-video bg-gradient-to-r from-black pt-[20%] pl-6'>
        <h1 className='font-bold text-6xl w-fit'>{movieTitle}</h1>
        <div className=' text-1xl w-7/12'> {movieDiscription}</div>

        <div className='flex gap-2 py-6'>
            <button className='p-2 px-4 bg-red-400 rounded-md font-bold shadow-xl'>&#10148; Play</button>
            <button className='p-2 px-4 bg-red-400 rounded-md font-bold shadow-xl'>More</button>
        </div>
    </div>
  )
}

export default VideoTitle;