import React from 'react';
import styled from 'styled-components';

const Item = ({ className, onClickChange, onClickRemove, todo }) => {
  return (
    <li key={todo.id} className={className}>
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={() => onClickChange(todo.id)}
      />
      <span className={todo.checked ? 'done' : 'not-done'}>{todo.text}</span>
      <span
        onClick={() => {
          onClickRemove(todo.id);
        }}
        className="lnr"
      >
        &#xe811;
      </span>
    </li>
  );
};

export const ListItem = styled(Item)`
  width: 100%;
  padding: 10px 10px;
  background: #f1f1f1;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  span {
    text-transform: uppercase;
    font-size: 10px;
  }

  .lnr {
    margin-left: auto;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .lnr:hover {
    color: red;
  }

  input[type='checkbox'] {
    width: 20px;
    height: 20px;
    padding: 5px 5px;
    margin: 0 10px 0 0;
  }

  :nth-child(odd) {
    background: lightgray;
  }

  .done {
    text-decoration: line-through;
    color: indianred;
    font-style: italic;
  }
  ¨ .not-done {
    text-decoration: none;
  }
`;
