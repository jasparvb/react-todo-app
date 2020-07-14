import React from "react";

function Todo({removeTodo, name, id}) {
    return (
        <div className="Todo">
            <p>{name}</p>
            <button onClick={() => removeTodo(id)}>X</button>
        </div>
    )
}

export default Todo;