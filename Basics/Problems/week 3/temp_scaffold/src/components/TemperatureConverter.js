import React, { Component } from "react";
import "./TemperatureConverter.css";

class TemperatureConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      celsius: "",
      fahrenheit: "",
    };
  }

  handleCelsiusChange = (e) => {
    // TODO: Implement Celsius to Fahrenheit conversion
    const celsius = e.target.value;
    const fahrenheit =
      celsius !== "" ? parseFloat(((celsius * 9) / 5 + 32).toFixed(2)) : "";
    this.setState({ celsius, fahrenheit });
  };

  handleFahrenheitChange = (e) => {
    // TODO: Implement Fahrenheit to Celsius conversion
    const fahrenheit = e.target.value;
    const celsius =
      fahrenheit !== ""
        ? parseFloat((((fahrenheit - 32) * 5) / 9).toFixed(2))
        : "";
    this.setState({ fahrenheit, celsius });
  };

  render() {
    const { celsius, fahrenheit } = this.state;
    return (
      <div className="temperature-converter">
        <div>
          <label>Celsius:</label>
          <input
            type="number"
            placeholder="Celsius"
            value={celsius}
            onChange={this.handleCelsiusChange}
          />
        </div>
        <div>
          <label>Fahrenheit:</label>
          <input
            type="number"
            placeholder="Fahrenheit"
            value={fahrenheit}
            onChange={this.handleFahrenheitChange}
          />
        </div>
      </div>
    );
  }
}

export default TemperatureConverter;
