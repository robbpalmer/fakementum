import React from "react";


let Source = ({src, backgrounds}) => {
    document.body.style.backgroundImage = `url(${backgrounds})`
    return(
        <div className="source">
            {src}
        </div>
    )
}

export default Source;