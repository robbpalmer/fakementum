import React, {useState, useEffect} from "react";

let ToDoForm = ({addTask}) => {
    let [userInput, setUserInput] = useState('');

    let handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                value={userInput} 
                type="text" 
                onChange={handleChange} 
                onSubmit={handleSubmit}
                placeholder="+" 
            />
        </form>
    )
}

export default ToDoForm;