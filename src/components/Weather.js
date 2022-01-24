import React, {useState, useEffect} from "react";
import axios from 'axios';

let Weather = () => {
    let [temp, setTemp] = useState([])
    let [icon, setIcon] = useState([])
    let [lat, setLat] = useState(null)
    let [lon, setLon] = useState(null)
    let [loc, setLoc] = useState([])

    //retrieve user lat and lon upon first render
    useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(Math.round((position.coords.latitude + Number.EPSILON) * 1000) / 1000)
        setLon(Math.round((position.coords.longitude + Number.EPSILON) * 1000) / 1000)
      })

      //check if lat and lon have been set before using them to retrieve weather data
      let getWeatherData = async () => {
        if(lat && lon) {
          try {
            let response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=d9ecf1836d30f559f8beb48586830f6e&units=imperial`);
              setTemp(response.data.current.temp)
              setIcon(`http://openweathermap.org/img/wn/${response.data.current.weather[0].icon}@2x.png`)
            } catch (error) {
              let errorIcon = `http://openweathermap.org/img/wn/02d@2x.png`
              setIcon(errorIcon)
              setTemp('??')
              if (error.response) {
                console.log(error.response.data)
                console.log(error.response.status)
                console.log(error.response.headers)
              } else if (error.request) {
                console.log(error.request);
              } else {
                  console.log('Error', error.message)
              }
            }
        }  
    }

    //check for lat and lon before retrieving city name
    let getCityName = async () => {
      if(lat && lon) {
        let response = await axios.get(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=50&appid=1fd5b0f0d730c3f552c99458ab6bd06d`)
        setLoc(response.data[0].name)
      } else {
          return
      }
    }
    getWeatherData();
    getCityName();
    }, [lat, lon]);
      
    return(
      <div >
        <div id="weather-container">
          <p>{isNaN(temp) ? temp : Math.round(temp)}°</p>
          <img alt={''} src={icon} id="weather-icon"/>
        </div> 
        <div>
        <div id="location">{loc}</div>
        </div>
      </div>  
    )
}

export default Weather;