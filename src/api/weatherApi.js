import axios from 'axios';

export default axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/onecall?lat=45.75&lon=-122.506&exclude={part}&appid=d9ecf1836d30f559f8beb48586830f6e&units=imperial`
});