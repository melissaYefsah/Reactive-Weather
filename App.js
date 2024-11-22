import React, { useState, useEffect } from 'react';
import cities from './data.js';
import WeatherCard from './components/WeatherCard.js';
import Location from './components/Location.js';
import Form from './components/Form.js';

function App() {
  const [weatherData, setWeatherData] = useState(null);  // We set initial state to null for better handling
  
  async function fetchData(location) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f9beb3ffbf2b3391662d64d1f631e279`
      );
      const data = await response.json();
      console.log(data);
      setWeatherData({
        location: data.name,
        temp: Math.floor(data.main.temp),
        weather: data.weather[0].main,
      });
    } catch (error) {
      console.log('Oh no, an error occurred! ', error);
    }
  }

  useEffect(() => {
    fetchData('new jersey');  // Default fetch for Canada
  }, []);

  return (
    <>
      <Form fetchData={fetchData} />
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up-to-the-minute weather news</h3>
      <div className="app">
        <Location weatherData={weatherData} setWeatherData={setWeatherData} />
      </div>
    </>
  );
}

export default App;
