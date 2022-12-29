import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext.jsx";

function HistoryList() {
  const { history } = useContext(WeatherContext);
  if (!history) {
    return <></>;
  }
  return (
    <ul>
      {history.map((search) => {
        return (
          <li>
            <p>
              <span className="font-bold">
                {search.location.country}, {search.location.region}.
              </span>{" "}
              {search.date.toJSON().slice(0, 10)}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default HistoryList;
