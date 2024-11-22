// Location.js
import React from 'react';
import WeatherCard from './WeatherCard';

function Location({weatherData,setWeatherData }) {


  // If no location is found, display a message
  if (!weatherData) {
    return <p>No data available for the selected location.</p>;
  }

  return (
    <div>
      <WeatherCard weatherData={weatherData} />
    </div>
  );
}

export default Location;