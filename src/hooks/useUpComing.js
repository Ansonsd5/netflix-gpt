import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies, addUpComingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const upComingMovies= useSelector((store) => store.movies?.upComingMovies)

  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );

    const jsonData = await data.json();
    dispatch(addUpComingMovies(jsonData.results));
  };
  useEffect(() => {
    !upComingMovies &&  getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
