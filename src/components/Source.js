import React from "react";


let Source = ({src, backgrounds, link}) => {
    document.body.style.backgroundImage = `url(${backgrounds})`
    return(
        <a href={link} target="_blank" className="source">
            {src} 
        </a>
    )
}

export default Source;