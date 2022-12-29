import React from "react";
import WeatherForm from "./Components/WeatherForm.jsx";
import WeatherChart from "./Components/WeatherChart.jsx";

function App() {
  return (
    <div
      className="bg-night text-fontNight w-screen h-screen
      flex flex-row justify-center items-center
    "
    >
      <div className=" container w-1/2  h-64 flex flex-col justify-center">
        <WeatherForm className="h-20 " />
        <WeatherChart />
      </div>
    </div>
  );
}

export default App;
