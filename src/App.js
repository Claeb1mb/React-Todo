import React from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

const todos = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos,
    };
  }

  toggleTodo = (todoId) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };

  // Class method to add a grocery item
  addItem = (todo) => {
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  clearItem = (e) => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.completed),
    });
  };

  render() {
    return (
      <div>
        <div>
          <h1>Todo List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.state.toggleTodo}
          clearItem={this.clearItem}
        />
      </div>
    );
  }
}

export default App;
