import React, {useState, useEffect} from "react";
import data from '../json/data.json';

let Todos = () => {
    let [todos, setTodos] = useState(data);
    let tasks = todos.map(todo => todo.task)

    return(
        <div id="todo-container">
            <p>{tasks}</p>
        </div>
    )
}



export default Todos;