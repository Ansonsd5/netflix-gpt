import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const Moviescontaioner = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative web">
      <VideoBackground movieId={id} />
      <VideoTitle movieTitle={original_title} movieDiscription={overview} />
    </div>
  );
};

export default Moviescontaioner;
