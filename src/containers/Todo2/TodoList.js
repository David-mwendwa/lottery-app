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
    this.setState({ todos: this.state.todos.filter((t) => t.id !== id) });
  };

  update = (id, updatedTask) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  toggleCompletion = (id) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };

  render() {
    const todos = this.state.todos.map((todo) => {
      return (
        <Todo
          id={todo.id}
          key={todo.id}
          task={todo.task}
          completed={todo.completed}
          removeTodo={this.remove}
          updateTodo={this.update}
          toggleTodo={this.toggleCompletion}
        />
      );
    });

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
