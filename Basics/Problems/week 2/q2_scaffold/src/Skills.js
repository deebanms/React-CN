// Create Skill component here to display your skills
// In this component there should be a list with each listitem as your skill.

import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Node</li>
        </ul>
      </div>
    );
  }
}

export default Skills;
