import React, { Component } from 'react';
import { v4 as uuidV4 } from 'uuid';

export class NewTodoForm extends Component {
  state = { task: '' };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTodo({ ...this.state, id: uuidV4(), completed: false });
    this.setState({ task: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='task'>New Todo</label>
        <input
          type='text'
          placeholder='new todo'
          id='task'
          name='task'
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default NewTodoForm;
