import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Moviescontaioner from "./Moviescontaioner";
import Secondary from "./Secondary";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComing";
import {useSelector } from 'react-redux';
import MovieSearch from "./MovieSearch";

const Browse = () => {

  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  return (
    <div>
      <Header />
      {
        showGptSearch ? <MovieSearch/> :
      
<>

      <Moviescontaioner />

      <Secondary />
      </>
    }
    </div>
  );
};

export default Browse;
