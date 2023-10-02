import React from "react";
import {  useSelector } from "react-redux";
import useMovieTariler from "../hooks/useMovieTrailers";


const MovieBackground = ({ movieId }) => {
  const trailer = useSelector(store => store.movie?.trailerVideo);
  useMovieTariler(movieId)
 

  
  return (
    <div className="w-auto">
      <iframe
      className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailer?.key + "?&autoplay=1&mute=1&loop=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default MovieBackground;
