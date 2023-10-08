import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTariler = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store)=>store.movies?.trailerVideo);

  const getMoviesVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );
    const jsonMovieVideo = await data.json();

    const filteredVideo = jsonMovieVideo.results?.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filteredVideo.length
      ? filteredVideo[0]
      : jsonMovieVideo.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    // console.log(!trailerVideo,"this is");
     !trailerVideo && getMoviesVideos();
  }, []);
};

export default useMovieTariler;
