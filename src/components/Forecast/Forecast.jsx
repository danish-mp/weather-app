import React from "react";
import "./Forecast.css";

const Forecast = ({ forecast }) => {
  return (
    <div className="forecast">
      <h3>5-Day Forecast</h3>

      <div className="forecast-items">
        {forecast.slice(0, 5).map((item, index) => (
          <div key={index} className="forecast-item">
            <p>{new Date(item.dt * 1000).toLocaleDateString()}</p>

            <p>{Math.round(item.main.temp)}°C</p>

            <p>{item.weather[0].description}</p>

            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt={item.weather[0].description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
