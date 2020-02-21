import React from 'react';
import { Title as H1 } from '../styles/Title';

const Title = ({ todoCount }) => {
  return (
    <H1>
      In my Todo list <small>there are {todoCount} chores</small>
    </H1>
  );
};
export default Title;
