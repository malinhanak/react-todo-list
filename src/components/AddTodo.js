import React, { useState } from 'react';
import { Form } from '../styles/Form';

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState('');
  return (
    <Form onSubmit={(e) => addTodo(input, e)}>
      <input
        data-testid="add-input"
        className="submit-task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>Submit</button>
    </Form>
  );
};

export default TodoForm;
