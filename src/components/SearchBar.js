import React from 'react'
import { useSelector } from 'react-redux'
import { language } from '../utils/languageConstants';

const SearchBar = () => {
  const languageKey = useSelector((store)=>store.config.lang);
  

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form className='w-full md:w-1/2 bg-[#d9232e24] grid grid-cols-12 rounded-md px-4' onSubmit={(e) => e.preventDefault()}>
        <input className=' p-4 m-4 col-span-8' placeholder={language[languageKey].gptSearchPlaceholder}></input>
        <button className='col-span-4 m-4  font-bold bg-red-400 px-4 py-1 rounded-sm shadow-inner' onClick={()=>{}}>{language[languageKey].search}</button>
      </form>
    </div>
  )
}

export default SearchBar