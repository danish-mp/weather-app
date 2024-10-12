import React, { useState, useEffect } from "react";
import axios from "axios";
import "./API.css";
import WeatherForm from "../WeatherForm/WeatherForm";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay";
import Forecast from "../Forecast/Forecast";

const API = () => {
  const [forecastData, setForecastData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // OpenWeatherMap API key
  const API_KEY = "d5a775daba0ac044d6d3e1e29d8bae67";

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);

    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
      );

      setWeatherData(weatherResponse.data);
      setForecastData(forecastResponse.data);
      setLoading(false);

      // Save last searched city to localStorage
      localStorage.setItem("lastCity", cityName);
    } catch (error) {
      setError(
        "City not found or there is a problem with the API." || error.message
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    const lastCity = localStorage.getItem("lastCity");
    if (lastCity) {
      fetchWeather(lastCity);
      setCity(lastCity);
    }
  }, []);

  return (
    <div className="container">
      <div className="first-section">
        <WeatherForm setCity={setCity} fetchWeather={fetchWeather} />

        {loading ? <div className="loading">Loading...</div> : null}
        {error && <div className="error">{error}</div>}

        {weatherData && <WeatherDisplay data={weatherData} />}
      </div>

      {forecastData && <Forecast forecast={forecastData.list} />}
    </div>
  );
};

export default API;
