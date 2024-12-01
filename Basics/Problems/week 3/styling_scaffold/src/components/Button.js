import React from "react";
import ReactDOM from "react-dom";

function Button({ label }) {
  // Add inline css to the button.
  const buttonStyle = {
    backgroundColor: "blue",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  };
  return <button style={buttonStyle}>{label}</button>;
}

export default Button;
