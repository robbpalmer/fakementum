import React, {useEffect, useState} from "react";

let Clock = () => {
    let [hours, setHours] = useState([]);
    let [minutes, setMinutes] = useState([]);
    let [greeting, setGreeting] = useState([]);
    let [date, setDate] = useState(new Date());
    let [ampm, setAmpm] = useState([]);

    function refreshClock() {
        setDate(new Date());
    }

    let getAmpm = () => {
        if (date.getHours() >= 12) {
            setAmpm('PM')
        } else setAmpm('AM')
    }

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
    let getTheGreeting = () => {
        let hours = date.getHours()
        if(hours > 11 && hours < 17) {
        setGreeting('Good afternoon')
        } else if (hours >= 17) {
            setGreeting('Good evenening')
        } else setGreeting('Good Morning')
    } 

    useEffect(() => {
        getAmpm();
        getTheHours();
        getTheMinutes();
        getTheGreeting();
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
            <p class="clockline">
                {ampm}
            </p>
            <h2 id="greeting">
                {greeting}
            </h2>          
        </div> 
    )
}


export default Clock;