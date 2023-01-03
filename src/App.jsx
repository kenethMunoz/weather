import React from "react";
import WeatherForm from "./Components/WeatherForm.jsx";
import WeatherChart from "./Components/WeatherChart.jsx";
import RecordButton from "./Components/RecordButton";
import HistoryList from "./Components/HistoryList.jsx";
function App() {
  return (
    <div
      className="bg-night text-fontNight w-screen h-screen
      flex flex-row justify-center items-center relative"
    >
      <div className=" container w-1/2 ">
        <WeatherForm />
        <WeatherChart />
      </div>
      <RecordButton />
    </div>
  );
}

export default App;
