import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./UI/loader/Loader";

const KEYAPI = "18efe4f1a737f57de9e9532b37cdaaf6";

const Widget = () => {

   const [loading, setLoading] = useState(true);
   const [weatherData, setWeatherData] = useState([]);
   const [cityName, setCityName] = useState('Kyiv');

   const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${KEYAPI}`;

   const fetchWeatherData = async (url) => {
      try {
         const { data } = await axios.get(url);
         setWeatherData(data);
      } catch (error) {
         console.log(error);
      }
      setLoading(false);
   };

   useEffect(() => {
      fetchWeatherData(weatherAPI);
   }, [weatherAPI]);

   if (weatherData.length <= 0) {
      return (
         <div className="weather">
            <div className="weather-warning">Wrong city name. Please use ISO 3166 country codes.</div>
         </div>
      )
   };

   return (
      <div className='weather'>
         {loading
            ? <Loader />
            : <div className="weather__body">
               <div className='weather__header'>
                  <div className='weather__main'>
                     <div className='weather__city'>
                        {weatherData.name}
                     </div>
                     <div className='weather__status'>
                        {weatherData.weather[0].main}
                     </div>
                  </div>
                  <div className='weather__icon'>
                     <img src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt={weatherData.weather[0].main} />
                  </div>
               </div>
               <div className='weather__temp'>{Math.round(weatherData.main.temp)}</div>
               <div className='weather__feels-like'>Feels like: {Math.round(weatherData.main.feels_like)}</div>
            </div>
         }
      </div>
   )
};

export default Widget;