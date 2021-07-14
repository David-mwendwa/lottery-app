import React, { Component } from 'react'

export class Todo extends Component {
  handleRemove = () => {
    this.props.removeTodo(this.props.id)
  }
  render() {
    return (
      <div>
        <button>edit</button>
        <button onClick={this.props.handleRemove}>x</button>
        <li>{this.props.task}</li>
      </div>
    );
  }
}

export default Todo
