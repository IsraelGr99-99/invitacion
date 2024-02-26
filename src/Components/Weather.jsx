import React, { useState, useEffect } from 'react'
import '../stylesheets/weather.css'
function Weather() {
  const API_WEATHER = 'https://api.weatherapi.com/v1/current.json?key=4a7c2588443d4bef921203704242402&q=Mexico&aqi=no';
  const [weather, setWeather] = useState({
    city: "",
    country:"",
    temp:"",
    condition:"",
    icon:"",
    conditionText: ""
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_WEATHER);
        const data = await response.json();
        setWeather({
          city: data.location.name,
          country: data.location.country,
          temp: data.current.temp_c,
          condition: data.current.condition.code,
          icon: data.current.condition.icon,
          conditionText: data.current.condition.text
        });
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container col-md-4 col-12 cont-weather'>
      <div className="img-weather">
        <img 
          src={weather.icon}  
          alt={weather.condition}
        />
      </div>
      <div className="info-weather">
        <p>{`${weather.city}, ${weather.country}`}</p>
        <p>{`${weather.temp} °C`}</p>
        <p>{weather.conditionText}</p>
      </div>
    </div>
  )
}

export default Weather;
