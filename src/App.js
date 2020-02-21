import React, { useState } from 'react';
import { uuid } from 'uuidv4';
import TodoForm from './components/AddTodo';
import TodoList from './components/Todos';
import Title from './components/Title';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  const addTodo = (item, e) => {
    e.preventDefault();
    const todo = { text: item, id: uuid(), checked: false };
    if (item.trim() === '') return;
    return setItems([...items, todo]);
  };

  const handleRemove = (index) => {
    return setItems(items.filter((todo) => todo.id !== index));
  };

  const handleAllChecked = () => {
    return setItems(items.filter((todo) => todo.checked === false));
  };

  const handleChange = (index) => {
    return setItems(
      items.map((todo) => {
        return todo.id === index ? { ...todo, checked: !todo.checked } : todo;
      }),
    );
  };

  return (
    <div>
      <Title todoCount={items.length} />
      <TodoForm addTodo={addTodo} />
      <TodoList
        todoList={items}
        checked={items.checked}
        handleChange={handleChange}
        remove={handleRemove}
        removeAll={handleAllChecked}
      />
    </div>
  );
}

export default App;
