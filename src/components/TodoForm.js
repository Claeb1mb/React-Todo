import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      item: "",
    };
  }

  handleChanges = (e) => {
    this.setState({ item: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.item);
    this.setState({ todo: [""] });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          name="task"
          value={this.state.item}
          onChange={this.handleChanges}
        />
        <button className="form-btn">Add Task</button>
      </form>
    );
  }
}

export default TodoForm;
