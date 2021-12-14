import React, {useState, useEffect} from "react";
import oneliners from '../api/oneliners'

let Joke = () => {
    let [joke, setJoke] = useState([]);
  
    let getJoke =  async () => {
      let response = await oneliners.get();
      let randomNum = Math.floor(Math.random() * 101)
      setJoke(response.data.data.children[randomNum].data.title)
    }
    useEffect(() => {
      getJoke()
    }, []);
      
    if (!joke) {
      return console.log('ErrorORORO')
    }
    return(
        <div className='joke-container'>
          <div id='joke'>
            {joke}
          </div>
        </div>
    )
}

export default Joke;