import React, {useState, useEffect} from "react";
import data from '../json/data.json';
import Todo from './Todo';
import ToDoForm from './ToDoForm'

let ToDoList = () => {
    let [todosData, setTodosData] = useState([]);
    let [isActive, setIsActive] = useState(false)

    let handleToggle = (id) => {
        let mapped = todosData.map(todo => {
            return todo.id == id ? {...todo, complete: !todo.complete} : {...todo};
        });
        setTodosData(mapped);
    }

    let handleHideClick = () => {
        setIsActive(current => !current)
    }

    let handleFilter = () => {
        let filtered = todosData.filter(todo => {
            return !todo.complete;
        });
        setTodosData(filtered);
    }

    let addTask = (userInput) => {
        let copy = [...todosData];
        copy = [...copy, { id: todosData.length + 1, task: userInput, complete: false}]
        setTodosData(copy)
    }

    let handleActiveness = () => {
            if(isActive) {
                return(
                <div id="todo-container">
                    <span className="bold todohover" onClick={handleHideClick}>TO-DO's</span>
                    {todosData.map(todo => {
                        return (
                            <div>
                                <Todo todos={todo} handleToggle={handleToggle} />
                            </div>
                        )
                    })}   
                <ToDoForm addTask={addTask} />  
                <p id="clearbutton" onClick={handleFilter}>Clear Completed</p>
            </div>
            )
        } else {
            return(
                <p className="todohover" id="todo-container" onClick={handleHideClick}>To-Do's</p>
            )
        }
    }

    useEffect(() => {
        console.log(isActive);
        handleActiveness();
    },[isActive])

    return(
        <div>
            {handleActiveness()}
        </div>
    )

}

export default ToDoList;