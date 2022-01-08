import React, {useState, useEffect} from "react";
import reddit from "./api/reddit";
import Clock from "./components/Clock";
import Source from './components/Source'
import Joke from "./components/Joke";
import Weather from "./components/Weather";

const App = () => {
  let [backgrounds, setBackgrounds] = useState([]);
  let [source, setSource] = useState([]);

  let getBackgrounds =  async () => {
    let response = await reddit.get();
    let randomNum = Math.floor(Math.random() * 101)
    setBackgrounds(response.data.data.children[randomNum].data.url) 
    setSource(response.data.data.children[randomNum].data.title)
  }

  useEffect(() => {
    getBackgrounds()
  }, []);
    
  if (!backgrounds) {
    return console.log('ErrorORORO')
  }


  return (
    <div className='container'>
      <Weather />
      <Clock />
      <Source src={source} backgrounds={backgrounds}/>
      <Joke />
      
    </div>
  );
}

export default App;
