import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" },
      ],
    };
  }
  handleAdd = (text) => {
    const { todos } = this.state;
    todos.unshift({ text });
    this.setState({
      todos,
    });
    // complete the function to add a new Todo to the list
  };

  handleRemove = (todo) => {
    // complete the function to remove the Todo from the list
    const { todos } = this.state;
    const index = todos.indexOf(todo);

    if (index !== -1) {
      const updatedTodos = [...todos];
      updatedTodos.splice(index, 1);

      this.setState({ todos: updatedTodos });
    }
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <span>Todo</span>
        {/* Pass the todos list and function as props to utilize those in the component for adding and removing */}
        <Form addTodo={this.handleAdd} />
        <List todos={todos} removeTodo={this.handleRemove} />
      </div>
    );
  }
}
