import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const Moviescontaioner = () => {

    const movies = useSelector(store => store.movie?.nowPlayingMovies);
    if(!movies) return;

    const mainMovie = movies[0];

    const { original_title , overview , id} = mainMovie;
    
  return (
    <div className='absolute top-0 z-0'>
        <VideoBackground movieId = {id} />
        <div className='absolute top-0'>
        <VideoTitle movieTitle = {original_title} movieDiscription = {overview}/>
        </div>
    </div>
  )
}

export default Moviescontaioner