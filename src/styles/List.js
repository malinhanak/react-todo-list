import React from 'react';
import styled from 'styled-components';

const List = ({ className, children, onClick }) => {
  return (
    <div className={`${className}`}>
      <ul>{children}</ul>
      <button onClick={onClick}>Delete all completed chores</button>
    </div>
  );
};

export const ToDoList = styled(List)`
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0;
    padding: 0;
  }

  button {
    padding: 1rem;
    background: indianred;
    font-weight: bold;
    color: #fff;
    border: 0;
    width: 100%;
  }

  button:focus {
    outline: none !important;
    box-shadow: none !important;
  }
`;
