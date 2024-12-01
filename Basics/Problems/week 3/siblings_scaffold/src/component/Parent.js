import React, { Component } from "react";
import ReactDOM from "react-dom";

// SiblingA Component
class SiblingA extends Component {
  handleChange = (event) => {
    // TODO: Implement handleChange
    this.props.setName(event.target.value);
  };

  render() {
    return (
      <div>
        <h2>Sibling A</h2>
        <input
          type="text"
          placeholder="Enter name"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

// SiblingB Component
class SiblingB extends Component {
  render() {
    return (
      <div>
        <h2>Sibling B</h2>
        <p>Name: {this.props.name}</p>
      </div>
    );
  }
}

// Parent Component
export default class Parent extends Component {
  state = {
    /* TODO: Initialize state */
    name: "",
  };

  setName = (newName) => {
    // TODO: Implement setName
    this.setState({ name: newName });
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <h1>Parent Component</h1>
        {/* TODO: Render SiblingA and SiblingB components */}
        <SiblingA setName={this.setName} />
        <SiblingB name={name} />
      </div>
    );
  }
}
