import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function TodoForm({ todos, setTodos }) {
  const [todo, setTodo] = useState({
    id: "",
    userid: "",
    //date: "",
    //endDate: "",
    //time: "",
    task: "",
    completed: false
  });

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function handleTaskInputChangetask(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleTaskInputChangeuser(e) {
    setTodo({ ...todo, userid: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid() });
      setTodo({ ...todo, task: "", userid: "" });
    }
  }
  return (
    <form id="form" className="todo-form" onSubmit={handleSubmit}>
      <div>
        <TextField
          label="Опишите задачу, укажите требуемые время и дату"
          type="text"
          name="task"
          value={todo.task}
          onChange={handleTaskInputChangetask}
        />
      </div>
      <div>
        <TextField
          label="Имя пользователя"
          type="text"
          name="task"
          value={todo.userid}
          onChange={handleTaskInputChangeuser}
        />
      </div>
    </form>
  );
}

export default TodoForm;
