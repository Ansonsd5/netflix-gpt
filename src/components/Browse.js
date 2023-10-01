import React, { useEffect } from 'react'
import Header from './Header'
import nowPlayingMovies from '../hooks/useNowPlayingMovies'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

const Browse = () => {

  useNowPlayingMovies();
  return (
    <div><Header /></div>
  )
}

export default Browse