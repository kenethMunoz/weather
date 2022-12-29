import React, { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherContext.jsx";

function WeatherForm() {
  const [text, setText] = useState([]);

  const { searchData } = useContext(WeatherContext);
  function search(e) {
    e.preventDefault();
    searchData(text);
  }
  return (
    <form className="flex">
      <input
        className="text-secundaryNight 
        shadow-[0px_22px_70px_4px_rgba(0,0,0,0.70)]
        px-8 py-3 rounded flex-1  mr-10  "
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        className="bg-secundaryNight 
        shadow-[0px_22px_70px_4px_rgba(0,0,0,0.70)]
        px-8 py-3  rounded-xl flex-3
        hover:bg-hoverNight
        transition duration-200"
        onClick={search}
      >
        Search
      </button>
    </form>
  );
}

export default WeatherForm;
