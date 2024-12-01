//kindly do not change the prewritten code

import React, { Component } from "react";

class ColorChanger extends Component {
  state = { color: "red" };

  componentDidMount() {
    // TODO: Set up an interval to change the color every second
    this.colorInterval = setInterval(this.changeColor, 1000);
  }

  componentWillUnmount() {
    // TODO: Clean up the interval when the component unmounts
    clearInterval(this.colorInterval);
  }

  changeColor = () => {
    // TODO: Implement the logic to change the color between red and blue
    this.setState((prevState) => ({
      color: prevState.color === "red" ? "blue" : "red",
    }));
  };

  render() {
    return (
      <div
        data-testid="color-changer"
        className="con"
        style={{ backgroundColor: this.state.color, height: "100vh" }}
      >
        <h1>The color is {this.state.color}</h1>
      </div>
    );
  }
}

export default ColorChanger;
