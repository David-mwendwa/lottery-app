import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';

import Todo from './Todo';

import './TodoList.scss';

export class TodoList extends Component {
  state = {
    todos: [],
  };

  create = (newTodo) => {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  remove = (id) => {
    this.setState({ todos: this.state.filter((t) => t.id !== id) });
  };

  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo
        id={todo.id}
        key={todo.id}
        task={todo.task}
        removeTodo={this.remove}
      />
    ));

    return (
      <div className='todo__container'>
        <h1>Todo List!</h1>
        <ul>{todos}</ul>
        <NewTodoForm createTodo={this.create} />
      </div>
    );
  }
}

export default TodoList;
