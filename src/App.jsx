import React, { useContext } from "react";
import WeatherForm from "./Components/WeatherForm.jsx";
import WeatherChart from "./Components/WeatherChart.jsx";
import RecordButton from "./Components/RecordButton";
import { WeatherContext } from "./context/WeatherContext.jsx";

function App() {
  const { animationParent } = useContext(WeatherContext);
  return (
    <div
      className="bg-night text-fontNight w-screen h-screen
      flex flex-row justify-center items-center relative"
    >
      <div refs={animationParent} className=" container w-1/2 ">
        <WeatherForm />
        <WeatherChart />
      </div>
      <RecordButton />
    </div>
  );
}

export default App;
