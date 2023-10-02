import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const Secondary = () => {
  const movieData = useSelector(store => store.movie);

  return (
    <div className='py-2 bg-black'>
      <div className='-mt-72 relative z-40'>
      <MovieList title = {"Now playing movies"}  movies= {movieData?.nowPlayingMovies} />
      <MovieList title = {"Top Rated Movies"}  movies= {movieData?.topRatedMovies} />
      <MovieList title = {"Popular movies"}  movies= {movieData?.popularMovies} />
      <MovieList title = {"UpComing Movies"}  movies= {movieData?.upComingMovies} />
    
      </div>
    </div>
  )
}

export default Secondary