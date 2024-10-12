import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";
import "./WeatherForm.css";

const WeatherForm = ({ setCity, fetchWeather }) => {
  const [formdata, setFormdata] = useState("");

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formdata.trim() !== "") {
      setCity(formdata);
      fetchWeather(formdata);
    }
  };

  return (
    <form className="weather-form" onSubmit={handleSubmit}>
      <input
        required
        type="text"
        placeholder="Enter city name..."
        value={formdata}
        onChange={(e) => setFormdata(e.target.value)}
      />
      <button type="submit">
        <LuSearch />
      </button>
    </form>
  );
};

export default WeatherForm;
