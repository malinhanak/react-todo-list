import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #66ccff;

  input:first-of-type {
    padding: 1rem;
    border: 0;
    width: 80%;
    background: #efefef;
  }

  button {
    padding: 1rem;
    background: mediumspringgreen;
    border: 0;
    width: 20%;
  }
`;
