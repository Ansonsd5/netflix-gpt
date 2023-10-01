import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'

const Browse = () => {
  const dispatch = useDispatch();
  
  const getNowPlayingMovieData = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
    const jsonData = await data.json();
    console.log(jsonData.results);
    dispatch(addNowPlayingMovies(jsonData.results));
    
  }

  useEffect(() =>{
    getNowPlayingMovieData();
  },[])

 

  return (
    <div><Header /></div>
  )
}

export default Browse