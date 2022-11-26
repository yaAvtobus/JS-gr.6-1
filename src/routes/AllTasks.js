import React from "react";
import "../index.css";
import TodoList from "../Components/TodoList";
import removeTodo from "../App";
import toggleComplete from "../App";

export default function AllTasks({ todos, setTodos }) {
  return (
    <div class="todo-list-wrapper">
      {<TodoList 
        todos={todos}
        setTodos={setTodos}
      />}
    </div>
  );
}
