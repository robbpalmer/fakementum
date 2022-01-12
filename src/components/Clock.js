import React from "react";



let Clock = () => {

    let getTheHours = () =>  {
        let hours = new Date().getHours();
        if (hours > 12) {
            return hours - 12
        } else return hours
    }

    let getTheMinutes = () => {
        let mins = new Date().getMinutes();
        if(mins < 10) {
            return `0${mins}`
        } return mins
    }


    let getGreeting = () => {
        let hours = new Date().getHours()
        if(hours > 11 && hours < 17) {
        return 'Good afternoon'
        } else if (hours >= 17) {
            return 'Good evenening'
        } else return 'Good morning'
    } 

    return(
        <div className='clock-container'>
            <h1 className="clock">
                {getTheHours() + ':' + getTheMinutes()}
            </h1>
            <h2>
                {getGreeting()}
            </h2>          
        </div> 
    )
}


export default Clock;