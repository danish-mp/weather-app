import React from "react";
import "./WeatherDisplay.css";

const WeatherDisplay = ({ data }) => {
  const { name, main, weather } = data;

  return (
    <div className="weather-display">
      <img
        src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
        alt={weather[0].description}
      />

      <p>{weather[0].description}</p>
      <p>{Math.round(main.temp)}°C</p>

      <h2>{name}</h2>
    </div>
  );
};

export default WeatherDisplay;
