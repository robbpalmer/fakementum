import React, {useEffect, useState} from "react";
import Greeting from './Greeting';

let Clock = () => {
    let [hours, setHours] = useState([]);
    let [minutes, setMinutes] = useState([]);
    let [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }

    useEffect(() => {
        let getTheHours = () =>  {
            let hours = date.getHours();
            if (hours > 12) {
                setHours(hours - 12)
            } else setHours(hours)
        }
        let getTheMinutes = () => {
            let mins = date.getMinutes();
            if(mins < 10) {
                setMinutes(`0${mins}`)
            } else setMinutes(mins)
        }
        getTheHours();
        getTheMinutes();
        let timerId = setInterval(refreshClock, 1000)
        return function cleanup() {
            clearInterval(timerId);
        }  
    }, [date])
    return(
        <div className='clock-container'>
            <h1 className="clock clockline">
                {hours + ':' + minutes}
            </h1>
            <Greeting date={date}/>
        </div> 
    )
}


export default Clock;