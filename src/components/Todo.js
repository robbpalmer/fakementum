import React from 'react';

let Todo = ({todos, handleToggle}) => {

    let handleClick = (e) => {
        console.log(e.currentTarget)
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return(
        <div onClick={handleClick} id={todos.id} className={todos.complete ? "todos strike" : "todos"}>
            {todos.task}
        </div>
    )
}



export default Todo;