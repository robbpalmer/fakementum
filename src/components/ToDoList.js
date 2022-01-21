import React, {useState, useEffect} from "react";
import Todo from './Todo';
import ToDoForm from './ToDoForm'

let ToDoList = () => {
    let [todosData, setTodosData] = useState([]);
    let [isActive, setIsActive] = useState(false)

    let saveData = (newList) => {
        localStorage.setItem("todos", JSON.stringify(newList))
    }

    let handleToggle = (id) => {
        console.log(id)
        let mapped = todosData.map(todo => {
            console.log(todo)
            return todo.id == id ? {...todo, complete: !todo.complete} : {...todo};
        });
        setTodosData(mapped);
        saveData(mapped);
        console.log(mapped)
    }

    let handleHideClick = () => {
        setIsActive(current => !current)
    }

    let handleFilter = () => {
        let filtered = todosData.filter(todo => {
            return !todo.complete;
        });
        setTodosData(filtered);
        saveData(filtered);
    }

    let addTask = (userInput) => {
        let copy = [...todosData];
        copy = [...copy, { id: Date.now(), task: userInput, complete: false}]
        setTodosData(copy)
        saveData(copy);
    }

    let handleActiveness = () => {
            if(isActive) {
                return(
                <div id="todo-container">
                    <span className="bold todohover" onClick={handleHideClick}>To-Do's</span>
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
                <span className="bold todohover" id="todo-container" onClick={handleHideClick}>To-Do's</span>
            )
        }
    }

    useEffect(() => {
        if (localStorage.getItem("todos")) {
            setTodosData(JSON.parse(localStorage.getItem("todos")))
        }
    },[])

    return(
        <div>
            {handleActiveness()}
        </div>
    )

}

export default ToDoList;