import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext.jsx";

function WeatherChart() {
  const { weather, location } = useContext(WeatherContext);
  let children;
  let heigth;
  if (Object.entries(weather).length !== 0) {
    heigth = "56";
    children = (
      <>
        <h2 className="font-bold">Current Weather:</h2>
        <h3>
          {location.country}, {location.region}
        </h3>
        <h4>
          <span className="font-bold">local time:</span>{" "}
          {location.localtime.slice(-5)}
        </h4>

        <p>
          <span className="font-bold">thermal sensation: </span>
          {weather.feelslike_c}
        </p>
        <p>
          <span className="font-bold">humidity: </span>
          {weather.humidity}
        </p>
        <p>
          <span className="font-bold">temperture: </span>
          {weather.temp_c}
        </p>
        <p>
          <span className="font-bold">wind speed: </span>
          {weather.wind_kph}
        </p>
        <p>
          <span className="font-bold">wind direction: </span>
          {weather.wind_dir}
        </p>
        <p>
          <span className="font-bold">condition: </span>
          {weather.condition.text}
        </p>
      </>
    );
  } else {
    heigth = "0";
  }

  return (
    <div
      className={`mt-10 text-center transition-height transition-slowest h-${heigth}`}
    >
      {children}
    </div>
  );
}

export default WeatherChart;
