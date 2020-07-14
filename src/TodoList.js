import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";


function TodoList() {
  const [todos, setTodos] = useState([]);


  /** Add new todo object to list. */
  const addTodo = todo => {
    let newTodo = { ...todo, id: uuid() };
    setTodos(todos => [...todos, newTodo]);
  };

  /** Remove todo object from list. */
  const removeTodo = id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  const todoComponents = todos.map(todo => (
    <Todo
      removeTodo={removeTodo}
      key={todo.id}
      id={todo.id}
      name={todo.name}
    />
  ));
  
  return (
    <div className="ShoppingList">
      <NewTodoForm addTodo={addTodo} />
      <ul>{todoComponents}</ul>
    </div>
  );
};
// end

export default TodoList;
