import React, {  useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { language } from "../utils/languageConstants";
import openai from "../utils/openAi";
import { API_OPTIONS, GPT_PROMPT_TEXT } from "../utils/constants";
import { addGptsuggestedMovies } from "../utils/gptSlice";
import Loader from "./Loader";

const SearchBar = () => {

  const [ loader , setLoader] = useState(false);
  const dispatch = useDispatch();
  const languageKey = useSelector((store) => store.config.lang);
  const searchRef = useRef(null);

  const rateLimitDelay = 1000; 

  const GetSuggestedMoviefromTMDB = async (movie) => {
    const tmdbResponse = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    
    const movieData = await tmdbResponse.json();

    return movieData.results;
   
  };

  

  const handleGptSearch = async () => {
    setLoader(!loader);
    const searchText = searchRef.current.value;
    const customGptQuery =
      GPT_PROMPT_TEXT.firstpart + searchText + GPT_PROMPT_TEXT.secondpart;
    await makeApiCall(customGptQuery);
   setLoader(false);
  };

  const makeApiCall = async (customGptQuery) => {
    try {
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: customGptQuery }],
        model: "gpt-3.5-turbo",
      });
      const GptRecommondedMovie =
        gptResults.choices?.[0]?.message?.content.split(",");
      const clean_GptRecommondedMovie = GptRecommondedMovie?.map((movie) =>
        movie.trim()
      );
      const suggestedAllMoviesPromiseArray = clean_GptRecommondedMovie.map(
        (movie) => GetSuggestedMoviefromTMDB(movie)
      );
      const suggestedAllMoviesArray = await Promise.all(
        suggestedAllMoviesPromiseArray
      );
      
      dispatch(
        addGptsuggestedMovies({
          movieNames: clean_GptRecommondedMovie,
          movieResult: suggestedAllMoviesArray,
        })
      );
     
    } catch (error) {
      if (error.response && error.response.status === 429) {
        setTimeout(() => makeApiCall(customGptQuery), rateLimitDelay);
      } else {
        console.error("API error:", error);
      }
    }
  };



  return (<>
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-[#d9232e24] grid grid-cols-12 rounded-md px-4"
        onSubmit={(e) => e.preventDefault()}
        name="searchform"
      >
        <input
          className=" p-4 m-4 col-span-8"
          placeholder={language[languageKey].gptSearchPlaceholder}
          ref={searchRef}
        ></input>
        <button
          className="text-sm col-span-4 m-4  font-bold bg-red-400 px-2 py-1 rounded-sm shadow-inner "
          onClick={handleGptSearch}
        >
          {language[languageKey].search}
        </button>
      </form>
    </div>
    {loader && <Loader /> }
    </>
  );
};

export default SearchBar;
