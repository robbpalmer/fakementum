import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.reddit.com/r/quotes.json?limit=100'
});