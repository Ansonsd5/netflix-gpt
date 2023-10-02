import React from 'react'
import MovieCard from './MovieCard';


const MovieList = ({title, movies}) => {

  return (
    <div className='flex flex-col gap-2'>

<div className='font-bold text-2xl px-2 text-white py-6 pl-4'>{title}</div>
    <div className='flex flex-row overflow-x-scroll'>

   
        
         {movies?.map((movie)=><MovieCard cardImg={movie.poster_path} key={movie.id}/> )}

       
        
        

    </div>
    </div>
  )
}

export default MovieList