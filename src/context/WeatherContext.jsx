import React, { createContext, useState } from "react";
export const WeatherContext = createContext();
const key = "a7765b4c37264d8b94144019222812";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export function WeatherContextProvider(props) {
  const [history, setHistory] = useState([]);
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({});
  const [showHistory, setShowHistory] = useState(false);
  const [animationParent] = useAutoAnimate();
  async function searchData(city) {
    if (city.length === 0) {
      setWeather({});
      setLocation({});

      return;
    }
    let response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no
      `
    );

    response = await response.json();

    setWeather(response.current);
    setLocation(response.location);
    setHistory([
      { location: response.location, date: new Date(), id: history.length },
      ...history,
    ]);
    localStorage.setItem("history", history);
  }

  return (
    <WeatherContext.Provider
      value={{
        searchData,
        weather,
        location,
        history,
        showHistory,
        setShowHistory,
        animationParent,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
}
