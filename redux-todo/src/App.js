import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction } from "./actions/TodoActions";

const App = () => {
  const [todo, setTodo] = useState();

  const dispatch = useDispatch;
  const Todo = useSelector((state) => state.Todo);

  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.prevent.default();
    dispatch(AddTodoAction(todo));
  };

  return (
    <div>
      <h1>TodoList App</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="enter todo here"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">+</button>
      </form>
      <ul>
        {todos &&
          todos.map((t) => (
            <li key={t.id}>
              <span>{t.todo}</span>
              <button>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
