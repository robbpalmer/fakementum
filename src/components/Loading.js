import React from "react";
import logo from '../assets/logo512.png';

let Loading = () => {
    return(
        <div id="loading-screen">
            <img src={logo} id="loading-icon" />
        </div>
    )
}

export default Loading;