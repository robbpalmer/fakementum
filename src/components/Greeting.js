import React, {useState, useEffect} from "react";

let Greeting = ({date}) => {
    let [greeting, setGreeting] = useState([]);
    let [name, setName] = useState('');
    let [userInput, setUserInput] = useState('');

    let saveData = (newName) => {
        localStorage.setItem("userName", newName)
    }

    let handleChange = (e) => {
        setUserInput(e.currentTarget.value)
        console.log(name)
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        setName(userInput);
        saveData(userInput);
    }

    

    let handleDclick = () => {
        setUserInput(name);
        setName('');
        saveData('')
    }
    

    useEffect(() => {
        let getTheGreeting = () => {
        let hours = date.getHours()
        if(hours > 11 && hours < 17) {
        setGreeting(`Good afternoon, ${name}`)
        } else if (hours >= 17) {
            setGreeting(`Good evening, ${name}`)
        } else setGreeting(`Good Morning, ${name}`)
        }
        getTheGreeting();
        if(localStorage.getItem("userName")) {
            setName(localStorage.getItem("userName"));
        }
    }, [name, date])

    return(
        <div>
            <h2 id="greeting" onDoubleClick={handleDclick}>
            {greeting}&nbsp;
            {
                name.length === 0 ? 
                <span>
                <form onSubmit={handleSubmit} id="greeting-form">
                    <input value={userInput} onChange={handleChange} onSubmit={handleSubmit} className="greetinginput"/>
                </form>
                </span> : ''
            }
            </h2>
        </div> 
    )
}

export default Greeting;