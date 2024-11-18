import React from 'react';
// Import data and WeatherCard here
import cities from './data.js';
import WeatherCard from './components/WeatherCard.js'
import {useState} from 'react'
import Location from './components/Location.js'
import Form from './components/Form.js';


function App() {
    const [location, setLocation] = useState('Paris');
  
    return (
      
      <>
        <Form location={location} setLocation={setLocation} />
        <h1 className="title">REACTIVE WEATHER</h1>
        <h3 className="subtitle">Up to the minute weather news</h3>
        <div className="app">
          {/* We sould remove this if we want to target the location mentionned on the use state */}
          {/*{cities.map((weather) => (
            <WeatherCard data={weather} />
          ))}*/}

          <Location data={cities} location={location} setLocation={setLocation} />
        </div>
      </>
    );
  }

export default App;

