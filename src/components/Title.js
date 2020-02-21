import React from 'react';

const Title = ({ todoCount }) => {
  return (
    <h1>
      In my Todo list <small>there are {todoCount} chores</small>
    </h1>
  );
};
export default Title;
