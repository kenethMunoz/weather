import React, { createContext, useState, useEffect } from "react";
export const WeatherContext = createContext();
const key = "a7765b4c37264d8b94144019222812";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export function WeatherContextProvider(props) {
  const h = localStorage.getItem("history");
  console.log(h);
  const [history, setHistory] = useState(h === null ? [] : JSON.parse(h));
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({});
  const [showHistory, setShowHistory] = useState(false);
  const [animationParent] = useAutoAnimate();
  const [text, setText] = useState("");

  async function searchData(city) {
    if (city.length === 0) {
      setWeather({});
      setLocation({});

      return;
    }

    try {
      let response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no
    `
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      response = await response.json();

      setWeather(response.current);
      setLocation(response.location);
      const obj = {
        location: response.location,
        date: new Date(),
        id: history === null ? 0 : history.length,
      };
      if (history === null) {
        setHistory([obj]);
      } else {
        setHistory([obj, ...history]);
      }

      localStorage.setItem("history", JSON.stringify(history));
    } catch (error) {
      setWeather({});
      setLocation({ error: error.message });
      return;
    }
  }

  function deleteHistory(id) {
    setHistory(history.filter((item) => item.id !== id));
  }

  return (
    <WeatherContext.Provider
      value={{
        searchData,
        setShowHistory,
        deleteHistory,
        setText,
        weather,
        location,
        history,
        showHistory,
        animationParent,

        text,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
}
