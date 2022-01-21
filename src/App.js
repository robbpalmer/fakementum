import React, {useState, useEffect} from "react";
import reddit from "./api/reddit";
import Clock from "./components/Clock";
import Source from './components/Source'
import Joke from "./components/Joke";
import Weather from "./components/Weather";
import ToDoList from "./components/ToDoList";
import Loading from "./components/Loading";

const App = () => {
  let [backgrounds, setBackgrounds] = useState(null);
  let [source, setSource] = useState([]);
  let [href, setHref] = useState([]);
  let [isLoading, setIsLoading] = useState(true)

  //get reddit background image api and set state
  let getBackgrounds =  async () => {
    let response = await reddit.get();
    let randomNum = Math.floor(Math.random() * 101)
    setBackgrounds(response.data.data.children[randomNum].data.url) 
    setSource(response.data.data.children[randomNum].data.title)
    setHref("http://www.reddit.com" + response.data.data.children[randomNum].data.permalink)
  }

  useEffect(() => {
    //check if backgrounds have been set to determine if page is loading
    if(!backgrounds) {
      getBackgrounds()
    } else setIsLoading(false)
  }, [backgrounds]);


  return (
    <>
      {!isLoading ? ( 
      <div className='container'>
        <Source src={source} backgrounds={backgrounds} link={href}/> 
        <Weather />
        <Clock />
        <Joke />
        <ToDoList />
      </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;
