import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants"
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();


    const getNowPlayingMovieData = async () =>{
      const data = await  fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTIONS);
      const jsonData = await data.json();
      dispatch(addNowPlayingMovies(jsonData.results))
    }
      useEffect(() =>{
        getNowPlayingMovieData();
      },[]);
    
}

export default useNowPlayingMovies;