import React, {useState, useEffect} from "react";
import weatherApi from "../api/weatherApi";

let Weather = () => {
    let [weather, setWeather] = useState([]);
    let [temp, setTemp] = useState([])
    let [icon, setIcon] = useState([])
  
    let getWeatherData =  async () => {
      let response = await weatherApi.get();
      setWeather(response.data.current.weather[0].description)
      setTemp(response.data.current.temp)
      setIcon(response.data.current.weather[0].icon)
    }

    let iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`

    useEffect(() => {
      getWeatherData()
    }, []);
      
    if (!weather) {
      return console.log('ErrorORORO')
    }
    return(
        <div class="weather-container">
           <img id="weather-icon" src={iconURL}/>
            <h3>{Math.round(temp)}</h3>
        </div>

    )
}

export default Weather;