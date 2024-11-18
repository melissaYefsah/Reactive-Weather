// Location.js
import React from 'react';
import WeatherCard from './WeatherCard';

function Location({ data, location, setLocation }) {

  const foundLocation = data.find((weather) => weather.city === location);

  // If no location is found, display a message
  if (!foundLocation) {
    return <p>No data available for the selected location.</p>;
  }

  return (
    <div>
      <WeatherCard data={foundLocation} />
    </div>
  );
}

export default Location;
