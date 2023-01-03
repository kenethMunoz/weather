import React, { useContext } from "react";
import { FaHistory } from "react-icons/fa";
import { WeatherContext } from "../context/WeatherContext.jsx";
import HistoryList from "./HistoryList";

function RecordButton() {
  const { showHistory, setShowHistory, animationParent } =
    useContext(WeatherContext);

  return (
    <div
      className="absolute bottom-10 right-10 
    flex flex-col justify-end items-end
    "
      refs={animationParent}
    >
      <HistoryList />
      <button
        onClick={() => {
          setShowHistory(!showHistory);
        }}
        className="bg-secundaryNight px-5 py-5
         rounded-full
        shadow-[0px_22px_70px_4px_rgba(0,0,0,0.70)]
        hover:bg-hoverNight
        transition duration-200 "
      >
        <FaHistory />
      </button>
    </div>
  );
}

export default RecordButton;
