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
        className="text-secundaryNight px-8 py-3 rounded flex-1  mr-10  "
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        className="bg-secundaryNight px-8 py-3   rounded-xl flex-3"
        onClick={search}
      >
        Search
      </button>
    </form>
  );
}

export default WeatherForm;
