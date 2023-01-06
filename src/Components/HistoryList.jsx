import React, { useContext, useEffect } from "react";
import { WeatherContext } from "../context/WeatherContext.jsx";
import HistoryPreview from "./HistoryPreview.jsx";

function HistoryList() {
  const { history, showHistory, animationParent } = useContext(WeatherContext);
  if (!history) {
    return <></>;
  }

  return (
    <ul
      refs={animationParent}
      className={`bg-fontNight bg ${showHistory ? "block" : "hidden"} 
    text-secundaryNight
    shadow-[0px_22px_70px_4px_rgba(0,0,0,0.70)]
    rounded m-3 
    scrollbar 
    max-h-48
    `}
    >
      {history.map((search, index) => {
        return <HistoryPreview key={index} search={search} />;
      })}
    </ul>
  );
}

export default HistoryList;
