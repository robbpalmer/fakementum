import React from "react";

let getHours = () => {
    let hours = new Date().getHours();
    if (hours > 12) {
        return hours - 12
    } else return hours
}
let getMinutes = () => {
    let mins = new Date().getMinutes();
    if(mins < 10) {
        return `0${mins}`
    } return mins
}

let ampm = () => {
    if(getGreeting() === 'Good afternoon' || getGreeting() == 'Good evenening') {
        return 'PM'
    } else return 'AM'
}

let getGreeting = () => {
    let hours = new Date().getHours()
    if(hours > 11 && hours < 17) {
    return 'Good afternoon'
    } else if (hours >= 17) {
        return 'Good evenening'
    } else return 'Good morning'
} 

let Clock = () => {
    return(
        <div className='clock-container'>
            <h1 className="clock">
                {getHours() + ':' + getMinutes()}
            </h1>
            <h2>
                {getGreeting()}
            </h2>          
        </div> 
    )
}


export default Clock;