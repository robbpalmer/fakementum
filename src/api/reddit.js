import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.reddit.com/r/EarthPorn.json?limit=100'
});