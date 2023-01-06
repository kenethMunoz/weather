import React, { useContext } from "react";
import { IoIosClose } from "react-icons/io";
import { WeatherContext } from "../context/WeatherContext.jsx";

function HistoryPreview({ search }) {
  const { deleteHistory } = useContext(WeatherContext);

  return (
    <li
      key={search.id}
      className={`${
        search.id % 2 === 0 ? "bg-fontNightSecundary" : "bg-fontNight"
      }
        p-3 rounded flex gap-3`}
    >
      <div>
        <span className="font-bold">
          {search.location.country}, {search.location.region}.
        </span>{" "}
        <p className="text-xs">{`${
          typeof search.date === "string"
            ? search.date.slice(0, 10).split("-").reverse().join("-")
            : `${search.date
                .toISOString()
                .slice(0, 10)
                .split("-")
                .reverse()
                .join("-")}`
        }`}</p>
      </div>

      <button
        onClick={() => {
          deleteHistory(search.id);
        }}
      >
        <IoIosClose className="text-2xl" />
      </button>
    </li>
  );
}

export default HistoryPreview;
