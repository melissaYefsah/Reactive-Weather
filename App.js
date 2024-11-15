import React from 'react';
// Import data and WeatherCard here
import cities from './data.js';
import WeatherCard from './components/WeatherCard.js'


function App() {
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                { cities.map((weather) => <WeatherCard data= {weather} />) }
            </div>
            
        </>
    )
}

export default App;