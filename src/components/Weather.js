import React, {useState, useEffect} from "react";
import axios from 'axios';


let Weather = () => {
    let [weather, setWeather] = useState([]);
    let [temp, setTemp] = useState([])
    let [icon, setIcon] = useState([])
    let [lat, setLat] = useState(null)
    let [lon, setLon] = useState(null)
    let [loc, setLoc] = useState([])

    // Only run once to set lon and lat
    useEffect(() => {
      console.log('Setting coordinates, should only run once.')
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(Math.round((position.coords.latitude + Number.EPSILON) * 1000) / 1000)
        setLon(Math.round((position.coords.longitude + Number.EPSILON) * 1000) / 1000)
      })
    }, [])

    // Will run every time coordinates changes, but it bails early if either coordinate isn't ready.
    useEffect(() => {
      // Gaurd against when coordinates aren't ready
      if(!lon || !lat) {
        console.log('Gaurded API calls when coordinates not ready.')
        return;
      }
      console.log(lon, lat)
      console.log('Coordinates ready, doing API calls.')

      const doApiCalls = async () => {
        // Weather
        try {
          let response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=d9ecf1836d30f559f8beb48586830f6e&units=imperial`);
          console.log(response)
          setWeather(response.data.current.weather[0].description)
          setTemp(response.data.current.temp)
          setIcon(`http://openweathermap.org/img/wn/${response.data.current.weather[0].icon}@2x.png`)
        } catch (error) {
          setIcon('02d')
            setTemp(420)
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

        // City
        let response = await axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=50&appid=1fd5b0f0d730c3f552c99458ab6bd06d`)
        setLoc(response.data[0].name)
      }

      doApiCalls();

    }, [lat, lon])

    return(
      <div >
        <div id="weather-container">
          <p>{Math.round(temp)}°</p>
          <img alt={''} src={icon} id="weather-icon"/>
        </div> 
        <div>
        <text id="location">{loc}</text>
        </div>
      </div>  
    )
}

export default Weather;
