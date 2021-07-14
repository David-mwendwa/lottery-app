import React, { Component } from 'react';

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

  render() {
    let result = this.state.isEditing ? (
      <div>
        <form onSubmit={this.handleUpdate}>
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
      <div>
        <button onClick={this.toggleForm}>edit</button>
        <button onClick={this.handleRemove}>x</button>
        <li>{this.props.task}</li>
      </div>
    );

    return result;
  }
}

export default Todo;
