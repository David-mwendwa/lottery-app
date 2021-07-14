import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './TodoForm.scss';

export class TodoForm extends Component {
  state = { task: '' };

  handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { ...this.state, id: uuidv4() };
    this.props.addTodo(newTodo);
    this.setState({ task: '' });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id='task'
          name='task'
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button id='btn'>Submit</button>
      </form>
    );
  }
}

export default TodoForm;
