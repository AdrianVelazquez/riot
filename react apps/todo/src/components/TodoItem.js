import React from "react";

// one instance of the todo item used multiple times with each instanstiation
function TodoItem() {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <p>Placeholder text here</p>
    </div>
  );
}

export default TodoItem;
