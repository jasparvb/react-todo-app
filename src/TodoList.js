import React, { useState } from "react";
import NewTodoListForm from "./NewTodoListForm";
import { v4 as uuid } from "uuid";


function TodoList() {
  const [todos, setTodos] = useState([]);

  const renderTodos = () => {
    return (
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.name}
          </li>
        ))}
      </ul>
    );
  };
  // end renderTodos

  /** Add new todo object to list. */
  const addTodo = todo => {
    let newTodo = { ...todo, id: uuid() };
    setTodos(todos => [...todos, newTodo]);
  };
  // end addTodo

  return (
    <div className="ShoppingList">
      <NewTodoListForm addItem={addTodo} />
      {renderTodos()}
    </div>
  );
};
// end

export default TodoList;
