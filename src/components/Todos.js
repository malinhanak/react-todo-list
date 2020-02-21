import React from 'react';
import { ToDoList } from '../styles/List';
import { ListItem } from '../styles/ListItem';

const List = ({ todoList, remove, handleChange, removeAll }) => {
  const todoNode = todoList.map((todo) => {
    return (
      <ListItem
        todo={todo}
        onClickChange={handleChange}
        onClickRemove={remove}
      />
    );
  });
  return <ToDoList onClick={removeAll}>{todoNode}</ToDoList>;
};
export default List;
