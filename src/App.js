import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/Todo';
import Title from './components/Title';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemlist: [],
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAllChecked = this.handleAllChecked.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo(val) {
    const todo = { text: val, id: Date.now(), checked: false };
    if (val.trim() === '') {
      return null;
    } else {
      this.state.itemlist.push(todo);
      this.setState({ itemlist: this.state.itemlist });
    }
  }
  handleRemove(index) {
    const remainder = this.state.itemlist.filter((todo, i) => {
      if (i !== index) return todo;
    });
    this.setState({ itemlist: remainder });
  }
  handleAllChecked() {
    const notDone = this.state.itemlist.filter((todo) => {
      if (todo.checked === false) return todo;
    });
    this.setState({ itemlist: notDone });
  }
  handleChange(index) {
    const newState = this.state.itemlist.map((todo, i) =>
      index === i ? { ...todo, checked: !todo.checked } : todo,
    );
    this.setState({ itemlist: newState });
  }

  render() {
    return (
      <div>
        <Title todoCount={this.state.itemlist.length} />
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          todos={this.state.itemlist}
          checked={this.state.itemlist.checked}
          handleChange={this.handleChange}
          remove={this.handleRemove}
          removeAll={this.handleAllChecked}
        />
      </div>
    );
  }
}

export default App;
