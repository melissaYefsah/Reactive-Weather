import React from "react";
import sunny from "../assets/Sunny.svg"
import rainy from "../assets/Rainy.svg"
import partlyCloudy from "../assets/PartlyCloudy.svg"
import cloudy from "../assets/Cloudy.svg"


function WeatherCard({weatherData}) {
  return (
    <div className = "card">
        <div className = "img-container">
        <img id="icon"
      src={
           weatherData.weather === "Rainy"
          ? rainy
          : weatherData.weather === "Clear"
          ? sunny
          : weatherData.weather === "Clouds"
          ? cloudy
          : weatherData.weather === "Clouds"
          ? partlyCloudy
          : sunny
      }
    />
        </div>
        <div class="card-body">
            <h3 className="card-title">{weatherData.location}</h3>
            <h5 className="card-text">{weatherData.temp} °C</h5>
            <h5 className="card-text">{weatherData.weather}</h5>
        </div>
    </div>
  );
};

// Export the WeatherCard
module.exports = WeatherCard;