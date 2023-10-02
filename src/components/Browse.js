import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Moviescontaioner from "./Moviescontaioner";
import Secondary from "./Secondary";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <Moviescontaioner />
      <Secondary />
      </div>
      
   
  );
};

export default Browse;
