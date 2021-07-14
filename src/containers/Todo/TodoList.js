import React from 'react';
import './TodoList.scss';
import TodoForm from './TodoForm';

class Todo extends React.Component {
  state = {
    todos: [],
    isEditing: false,
    task: '',
  };

  addTodo = (newTodo) => {
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  removeTodo = (id) => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  };

  toggleForm = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleUpdate = (e, id) => {
    e.preventDefault();
    this.setState({ isEditing: false });
  };

  handleUpdate = (e) => {
    e.preventDefault()
    this.update()
  }

  update = (id, updatedTask) => {
    const updtaedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updtaedTodos });
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
                {this.state.isEditing ? (
                  <form onSubmit={this.handleUpdate}>
                    <input
                      type='text'
                      value={todo.task}
                      name='task'
                      onChange={() => this.handleChange(todo.id)}
                    />
                    <button>Save</button>
                  </form>
                ) : (
                  <>
                    {todo.task}
                    <form key={todo.id} className='todo__actions'>
                      <button
                        onClick={this.toggleForm}
                        className='fas fa-pen'></button>
                      <button
                        onClick={() => this.removeTodo(todo.id)}
                        className='fas fa-trash'></button>
                    </form>
                  </>
                )}
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
