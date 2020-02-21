import React from 'react';

const TodoForm = ({ addTodo }) => {
  let input;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(input.value);
        input.value = '';
      }}
    >
      <input
        className="submit-task"
        ref={(node) => {
          input = node;
        }}
      />
      <button className="submitBtn">Submit</button>
    </form>
  );
};

export default TodoForm;
