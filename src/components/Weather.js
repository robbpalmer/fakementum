import React, {useState, useEffect} from "react";
import axios from 'axios';


let Weather = () => {
    let [weather, setWeather] = useState([]);
    let [temp, setTemp] = useState([])
    let [icon, setIcon] = useState([])
    let [lat, setLat] = useState([])
    let [lon, setLon] = useState([])
    let [loc, setLoc] = useState([])

    useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(Math.round((position.coords.latitude + Number.EPSILON) * 1000) / 1000)
        setLon(Math.round((position.coords.longitude + Number.EPSILON) * 1000) / 1000)
      })

      let getWeatherData = async () => {
        if(lat.toString().length > 2 && lon.toString().length > 2) {
            let response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=d9ecf1836d30f559f8beb48586830f6e&units=imperial`)
            .catch(err => {
              if (err.response.status == 429) {
                setTemp(420)
                setIcon('10d')
              }
            })
              console.log(response)
              setWeather(response.data.current.weather[0].description)
              setTemp(response.data.current.temp)
              setIcon(`http://openweathermap.org/img/wn/${response.data.current.weather[0].icon}@2x.png`)
        } else {
        return
      }
       
    }
    getWeatherData();
      // console.log('The lat is', lat)
      // console.log('the lon is', lon)
    }, [lat, lon]);
      
    return(
        <div id="weather-container">
          <p>{Math.round(temp)}°</p>
          <img alt={''} src={icon} id="weather-icon"/>
        </div>
    )
}

export default Weather;