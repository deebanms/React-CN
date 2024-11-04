// Create component here to display the Basic information such as
// Name: Email: Phone: Address:
// Make sure to include these in your code with semicolon
import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <p>
          <b>Name: Pranav Sharad Yeole</b>
        </p>
        <p>Email: pranav@google.com</p>
        <p>Phone: 8546465544</p>
        <p>Address: ABC, xyz street.</p>
      </div>
    );
  }
}

export default Hero;
