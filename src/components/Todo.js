import React from 'react';

let Todo = ({todos, handleToggle}) => {
    return(
        <div className={todos.complete ? "strike" : ""}>
            <p onClick={handleToggle}>{todos.task}</p>
        </div>
    )
}



export default Todo;