import React from "react";

const VideoTitle = ({ movieTitle, movieDiscription }) => {
  return (
    <div className=" text-white w-screen aspect-video bg-gradient-to-r from-black pt-[20%] pl-6 absolute top-0 ">
      <h1 className="font-bold text-1xl sd:text-3xl  w-fit md:text-6xl  pb-4">{movieTitle}</h1>
      <div className="text-sm sd:1xl md:1xl w-11/12  md:8/12"> {movieDiscription}</div>

      <div className="flex gap-2 py-3">
        <button className="p-2 px-4 bg-red-400 rounded-md font-bold shadow-xl text-black">
          &#10148; Play
        </button>
        <button className="py p-2 px-4 bg-red-400 rounded-md font-bold shadow-xl text-black">
          More
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
