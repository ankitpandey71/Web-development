import React from "react";

const App = () => {
  return (
    <div>
      <h1>TodoList App</h1>
      <form>
        <input placeholder="enter todo here" />
        <button type="submit">+</button>
      </form>
      <ul>
        <li>
          <span>First Todo</span>
          <button>Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default App;
