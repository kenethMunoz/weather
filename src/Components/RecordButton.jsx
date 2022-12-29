import React, { useContext } from "react";
import { FaHistory } from "react-icons/fa";
import { WeatherContext } from "../context/WeatherContext.jsx";

function RecordButton() {
  const { history } = useContext(WeatherContext);

  return (
    <button
      onClick={() => {
        console.log(history);
      }}
      className="bg-secundaryNight px-5 py-5
        absolute bottom-10 right-10 rounded-full
        shadow-[0px_22px_70px_4px_rgba(0,0,0,0.70)]
        hover:bg-hoverNight
        transition duration-200 "
    >
      <FaHistory />
    </button>
  );
}

export default RecordButton;
