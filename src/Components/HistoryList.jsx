import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext.jsx";

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
      {history.map((search) => {
        return (
          <li
            key={search.id}
            className={`${
              search.id % 2 === 0 ? "bg-fontNightSecundary" : "bg-fontNight"
            }
            p-3 rounded
            `}
          >
            <p className="text-xs">
              <span className="font-bold">
                {search.location.country}, {search.location.region}.
              </span>{" "}
              {search.date.toJSON().slice(0, 10)}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default HistoryList;
