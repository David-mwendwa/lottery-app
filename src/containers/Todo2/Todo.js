import React, { Component } from 'react';
import './Todo.scss';

export class Todo extends Component {
  state = { isEditing: false, task: this.props.task };
  handleRemove = () => {
    this.props.removeTodo(this.props.id);
  };

  toggleForm = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleUpdate = (e) => {
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.toggleForm();
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleToggle = () => {
    this.props.toggleTodo(this.props.id);
  };

  render() {
    let result = this.state.isEditing ? (
      <div className='Todo'>
        <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
          <input
            type='text'
            value={this.state.task}
            name='task'
            onChange={this.handleChange}
          />
          <button>Save</button>
        </form>
      </div>
    ) : (
      <div className='Todo'>
        <li
          onClick={this.handleToggle}
          className={
            this.props.completed ? 'Todo-task completed' : 'Todo-task'
          }>
          {this.props.task}
        </li>
        <div className='Todo-buttons'>
          <button onClick={this.toggleForm}>
            <i className='fas fa-pencil' />
          </button>
          <button onClick={this.handleRemove}>
            <i className='fas fa-trash' />
          </button>
        </div>
      </div>
    );

    return this.state.task && this.state.task.trim().length > 0 && result;
  }
}

export default Todo;
