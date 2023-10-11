import React from "react";

const VideoTitle = ({ movieTitle, movieDiscription }) => {
  return (
    <div className=" text-white w-screen aspect-video bg-gradient-to-r from-black pt-[20%] pl-6 absolute top-0">
      <h1 className="font-bold text-4xl w-fit md:text-6xl">{movieTitle}</h1>
      <div className=" text-1xl w-11/12 md:8/12"> {movieDiscription}</div>

      <div className="flex gap-2 py-3">
        <button className="p-2 px-4 bg-red-400 rounded-md font-bold shadow-xl">
          &#10148; Play
        </button>
        <button className="p-2 px-4 bg-red-400 rounded-md font-bold shadow-xl">
          More
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
