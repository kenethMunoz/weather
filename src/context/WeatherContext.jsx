import React, { createContext, useState } from "react";
export const WeatherContext = createContext();
const key = "a7765b4c37264d8b94144019222812";

export function WeatherContextProvider(props) {
  const [data, setData] = useState({});
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({});

  async function searchData(city) {
    if (city.length === 0) {
      setWeather({});
      setLocation({});

      return;
    }
    let response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=a7765b4c37264d8b94144019222812&q=${city}&aqi=no
      `
    );

    response = await response.json();

    setWeather(response.current);
    setLocation(response.location);
  }
  return (
    <WeatherContext.Provider value={{ data, searchData, weather, location }}>
      {props.children}
    </WeatherContext.Provider>
  );
}
