import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './TodoForm.scss';

export class TodoForm extends Component {
  state = { todo: '' };

  handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { ...this.state, id: uuidv4() };
    this.props.addTodo(newTodo);
    this.setState({ todo: '' });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id='todo'
          name='todo'
          value={this.state.todo}
          onChange={this.handleChange}
        />
        <button id='btn'>Submit</button>
      </form>
    );
  }
}

export default TodoForm;
