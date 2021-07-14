import React from 'react';
import './TodoList.scss';
import TodoForm from './TodoForm';

class Todo extends React.Component {
  state = {
    todos: [{ task: 'walk the fish' }, { task: 'Groom the chicken' }],
  };

  addTodo = (newTodo) => {
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className='todo__container'>
        <div className='todo'>
          <div>
            <h1>Todo List!</h1>
            <p>A Simple React Todo List App.</p>
          </div>
          <ul>
            {this.state.todos.map((todo) => (
              <div className='todo__item'>
                {todo.task}
                <li className='todo__actions'>
                  <i className='fas fa-pen'></i>
                  <i className='fas fa-trash'></i>
                </li>
              </div>
            ))}
          </ul>
          <TodoForm addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default Todo;
