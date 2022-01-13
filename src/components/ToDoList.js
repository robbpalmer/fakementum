import React, {useState, useEffect} from "react";
import data from '../json/data.json';
import Todo from './Todo'

let ToDoList = () => {
    let [todosData, setTodosData] = useState(data);

    let handleToggle = (id) => {
        let mapped = todosData.map(todo => {
            return todo.id == id ? {...todo, complete: !todo.complete} : {...todo};
        });
        setTodosData(mapped);
    }

    let handleFilter = () => {
        let filtered = todosData.filter(todo => {
            return !todo.complete;
        });
        setTodosData(filtered);
    }

    return(
        <div id="todo-container">
            <p class="bold">TO-DO's</p>
            {todosData.map(todo => {
                return (
                    <Todo todos={todo} handleToggle={handleToggle} />
                )
            })}     
            <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    )
}



export default ToDoList;