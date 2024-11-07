import { Component } from "react";

export class Todo extends Component {
  render() {
    const { todo, removeTodo } = this.props;
    return (
      <div className="todo">
        <p>{todo.text}</p>
        {/* Add the onClick event to handle removal of the todos */}
        <button
          onClick={() => {
            removeTodo(todo);
          }}
        >
          x
        </button>
      </div>
    );
  }
}
