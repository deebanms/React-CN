import React from "react";

export default class Name extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "Coding Ninjas",
      curIndex: 0,
      currentName: "",
    };
    this.intervalId = null;
  }

  // This function adds a character to the string.
  typeWriterEffect = () => {
    this.setState((prevState) => {
      return {
        curIndex: prevState.curIndex + 1,
        currentName: prevState.fullName.substring(0, prevState.curIndex),
      };
    });
  };

  // Required lifecycle methods here
  componentDidUpdate(prevProps) {
    const { showName } = this.props;

    // Check if showName prop has changed to true
    if (showName && !prevProps.showName) {
      this.intervalId = setInterval(this.typeWriterEffect, 500);
    }

    // Clear interval if showName prop is false
    if (!showName && prevProps.showName) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  componentWillUnmount() {
    // Clear interval when component is unmounted
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  render() {
    return <h1>{this.state.currentName}</h1>;
  }
}
