import React from 'react';

const TodoList = ({ todos, remove, handleChange, removeAll }) => {
  const todoNode = todos.map((todo, index) => {
    return (
      <li key={index}>
        <input
          type="checkbox"
          checked={todo.checked}
          onChange={() => handleChange(index)}
        />
        <span className={todo.checked ? 'done' : 'notdone'}>{todo.text}</span>
        <span
          onClick={() => {
            remove(index);
          }}
          className="lnr"
        >
          &#xe811;
        </span>
      </li>
    );
  });
  return (
    <div className="fullList">
      <ul className="todo-list">{todoNode}</ul>
      <button
        className="clearAll"
        onClick={() => {
          removeAll();
        }}
      >
        Delete all completed chores
      </button>
    </div>
  );
};
export default TodoList;
