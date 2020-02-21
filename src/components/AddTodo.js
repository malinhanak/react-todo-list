import React from 'react';
import { Form } from '../styles/Form';

const TodoForm = ({ addTodo }) => {
  let input;
  return (
    <Form
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
      <button>Submit</button>
    </Form>
  );
};

export default TodoForm;
