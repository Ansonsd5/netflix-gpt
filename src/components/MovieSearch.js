import React from "react";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const MovieSearch = () => {
  const { movieNames, movieResult } = useSelector((store) => store.gpt);

  return (
    <div className="bg-black bg-opacity-98 h-full min-h-screen">
      <SearchBar/>
      
      { !movieNames ? null : <div>
        {movieNames?.map((movie, index) => {
          return (
            <MovieList key={movie} title={movie} movies={movieResult[index]} />
          );
        })}
      </div>
        
        }
      
    </div>
  );
};

export default MovieSearch;
